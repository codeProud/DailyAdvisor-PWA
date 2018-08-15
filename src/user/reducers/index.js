import * as actions from '../actions';

const initialState = {
    user: null,
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_USER_DATA_FULFILLED:
            console.log(action.payload);
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}
