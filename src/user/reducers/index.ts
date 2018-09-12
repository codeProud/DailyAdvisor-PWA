import * as actions from '../actions';
import * as authActions from '../../auth/actions';

const initialState = {
    data: {},
    mode: 'client',
};

export function user(state = initialState, action) {
    switch (action.type) {
        case actions.GET_USER_DATA_FULFILLED:
            return {
                ...state,
                data: action.payload.data,
            };
        case authActions.LOGOUT_USER_FULFILLED:
            return initialState;
        case actions.USER_CHANGE_USER_MODE:
            const mode = state.mode === 'client' ? 'coach' : 'client';

            return {
                ...state,
                mode,
            };
        default:
            return state;
    }
}
