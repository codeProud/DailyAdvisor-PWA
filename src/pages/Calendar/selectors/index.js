import { createSelector } from 'reselect';
import moment from 'moment';
import _range from 'lodash/range';
import _defaultTo from 'lodash/defaultTo';
import _isEmpty from 'lodash/isEmpty';

export const yearSelector = createSelector(
    state => state.calendar.month,
    month =>
        moment()
            .month(month)
            .year(),
);

export const startOfMonthSelector = createSelector(
    state => state.calendar.month,
    month =>
        moment()
            .month(month)
            .startOf('month')
            .dayOfYear(),
);

export const endOfMonthSelector = createSelector(
    state => state.calendar.month,
    month =>
        moment()
            .month(month)
            .endOf('month')
            .dayOfYear(),
);

export const daysSelector = createSelector(
    state => state.calendar.month,
    startOfMonthSelector,
    endOfMonthSelector,
    (month, startOfMonth, endOfMonth) => {
        return _range(startOfMonth, endOfMonth + 1).map(day => ({
            name: moment()
                .month(month)
                .dayOfYear(day)
                .format('D dddd'),
            numberInMonth: moment()
                .month(month)
                .dayOfYear(day)
                .format('D'),
            unique: `${month}${day}`,
            day,
        }));
    },
);

export const monthNameSelector = createSelector(
    state => state.calendar.month,
    month =>
        moment()
            .month(month)
            .format('MMMM'),
);

const dayWeekSelectors = createSelector(
    state => state.calendar.month,
    startOfMonthSelector,
    endOfMonthSelector,
    (month, startOfMonth, endOfMonth) =>
        _range(startOfMonth, endOfMonth + 1).map(day => ({
            ofYear: day,
            ofWeek: moment()
                .month(month)
                .dayOfYear(day)
                .weekday(),
        })),
);

const mergeTrainings = (...allTrainings) =>
    allTrainings.reduce((trainings, trainingsByRecurringType) => {
        return {
            ...trainings,
            ...Object.entries(trainingsByRecurringType).reduce((trainingsInDay, [key, value]) => {
                return {
                    ...trainingsInDay,
                    [key]: [
                        ..._defaultTo(trainingsInDay[key], []),
                        ..._defaultTo(trainings[key], []),
                        ...value,
                    ],
                };
            }, {}),
        };
    }, {});

const filterByRecurringName = (recurringName, date) => t =>
    t.event.recurringPattern.recurringType.recurringName === recurringName &&
    date.isBetween(t.event.startDate, t.event.endDate);

const calculateDailyTrainings = (trainings, month, day) => {
    return trainings.reduce((acc, t) => {
        const key = `${month}${day}`;
        if (!acc[key]) {
            acc[key] = [];
        }
        return {
            ...acc,
            [key]: [...acc[key], t],
        };
    }, {});
};

const calculateWeeklyTrainings = (trainings, month, day) => {
    const matchedTrainings = trainings.filter(
        t => t.event.recurringPattern.day_of_week === day.ofWeek,
    );

    return !_isEmpty(matchedTrainings)
        ? {
              [`${month}${day.ofYear}`]: matchedTrainings,
          }
        : {};
};

const calculateMonthlyTrainings = (trainings, month, day, days) => {
    const matchedTrainings = trainings.filter(t => {
        const start = moment(t.event.startDate).dayOfYear();
        const matchedDay = days
            .filter(day => day.ofYear >= start)
            .find(d => t.event.recurringPattern.day_of_week === d.ofWeek);

        return matchedDay.ofYear === day.ofYear;
    });

    return !_isEmpty(matchedTrainings)
        ? {
              [`${month}${day.ofYear}`]: matchedTrainings,
          }
        : {};
};

export const trainingDaysSelector = createSelector(
    state => state.calendar.data,
    state => state.calendar.month,
    dayWeekSelectors,
    (data, month, days) => {
        const trainingDays = days.reduce((acc, day) => {
            const date = moment()
                .month(month)
                .dayOfYear(day.ofYear);

            const isNotInRange = data.trainings.every(
                t => !date.isBetween(t.event.startDate, t.event.endDate),
            );

            if (isNotInRange) {
                return acc;
            }

            const daily = data.trainings.filter(filterByRecurringName('daily', date));
            const dailyTrainings = calculateDailyTrainings(daily, month, day.ofYear);

            const weekly = data.trainings.filter(filterByRecurringName('weekly', date));
            const weeklyTrainings = calculateWeeklyTrainings(weekly, month, day);

            const monthly = data.trainings.filter(filterByRecurringName('monthly', date));
            const monthlyTrainings = calculateMonthlyTrainings(monthly, month, day, days);

            return {
                ...acc,
                daily: { ..._defaultTo(acc.daily, {}), ...dailyTrainings },
                weekly: { ..._defaultTo(acc.weekly, {}), ...weeklyTrainings },
                monthly: { ..._defaultTo(acc.monthly, {}), ...monthlyTrainings },
            };
        }, {});

        return mergeTrainings(...Object.values(trainingDays));
    },
);
