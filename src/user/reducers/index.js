import * as actions from '../actions';

const initialState = {};

export function user(state = initialState, action) {
    switch (action.type) {
        case actions.GET_USER_DATA_FULFILLED:
            console.log(action.payload);
            return {
                ...state,
                ...action.payload.data,
            };
        default:
            return state;
    }
}
