export const CALENDAR_INCREMENT_MONTH = '[CALENDAR] INCREMENT_MONTH';
export const calendarIncrementMonth = () => ({
    type: CALENDAR_INCREMENT_MONTH,
});

export const CALENDAR_DECREMENT_MONTH = '[CALENDAR] DECREMENT_MONTH';
export const calendarDecrementMonth = () => ({
    type: CALENDAR_DECREMENT_MONTH,
});

export const CALENDAR_FETCH_TRAININGS = '[CALENDAR] FETCH_TRAININGS';
export const calendarFetchTrainings = () => ({
    type: CALENDAR_FETCH_TRAININGS,
});

export const CALENDAR_FETCH_TRAININGS_FULFILLED = '[CALENDAR] FETCH_TRAININGS_FULFILLED';
export const calendarFetchTrainingsFulfilled = trainings => ({
    type: CALENDAR_FETCH_TRAININGS_FULFILLED,
    payload: trainings,
});

export const CALENDAR_FETCH_TRAININGS_REJECTED = '[CALENDAR] FETCH_TRAININGS_REJECTED';
export const calendarFetchTrainingsRejected = errorMsg => ({
    type: CALENDAR_FETCH_TRAININGS_REJECTED,
    error: errorMsg,
});
