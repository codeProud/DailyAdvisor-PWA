import * as actions from '../actions';

const initialState = { authenticated: false };

export function auth(state = initialState, action) {
    switch (action.type) {
        case actions.LOGIN_USER_FULFILLED:
            return {
                ...state,
                authenticated: true,
            };

        case actions.LOGOUT_USER_FULFILLED:
            return {
                ...state,
                authenticated: false,
            };

        default:
            return state;
    }
}
