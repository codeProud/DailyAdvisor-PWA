import * as actions from '../actions';
import * as authActions from '../../auth/actions';

const initialState = {};

export function user(state = initialState, action) {
    switch (action.type) {
        case actions.GET_USER_DATA_FULFILLED:
            return {
                ...state,
                ...action.payload.data,
            };
        case authActions.LOGOUT_USER_FULFILLED:
            return {
                ...initialState,
            };
        default:
            return state;
    }
}
