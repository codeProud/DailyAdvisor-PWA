import moment from 'moment';
import * as actions from '../actions';

const month = moment().month();

const initialState = {
    month,
    data: {
        trainings: [],
    },
    isLoading: false,
};

export function calendar(state = initialState, action) {
    switch (action.type) {
        case actions.CALENDAR_INCREMENT_MONTH:
            return {
                ...state,
                month: state.month + 1,
            };
        case actions.CALENDAR_DECREMENT_MONTH:
            return {
                ...state,
                month: state.month - 1,
            };
        case actions.CALENDAR_FETCH_TRAININGS_FULFILLED:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case actions.CALENDAR_FETCH_TRAININGS:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
}
