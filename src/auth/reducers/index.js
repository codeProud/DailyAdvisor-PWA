import * as actions from '../actions';

const initialState = {
    isLoggedIn: null,
};

export function auth(state = initialState, action) {
    switch (action.type) {
        case actions.LOGIN_USER_FULFILLED:
            return {
                ...state,
                isLoggedIn: true,
            };
        default:
            return state;
    }
}
