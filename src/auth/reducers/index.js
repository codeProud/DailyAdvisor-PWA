import * as actions from '../actions';

const initialState = { isLoggedIn: false };

export function auth(state = initialState, action) {
    switch (action.type) {
        case actions.LOGIN_USER_FULFILLED:
            return {
                ...state,
                isLoggedIn: true,
            };

        case actions.LOGOUT_USER_FULFILLED:
            return {
                ...state,
                isLoggedIn: false,
            };

        default:
            return state;
    }
}
