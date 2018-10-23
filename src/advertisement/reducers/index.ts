import * as actions from '../actions';

const initialState = {
    adverts: [],
    advert: {},
};

export function advertisement(state: any = initialState, action: any): any {
    switch (action.type) {
        case actions.ADVERT_GET_ALL_ADVERTS_FULFILLED:
            return {
                ...state,
                adverts: action.payload,
            };
        case actions.ADVERT_GET_ADVERT_FULFILLED:
            return {
                ...state,
                advert: action.payload,
            };
        case actions.ADVERT_GET_ADVERT_BY_USER_FULFILLED:
            return {
                ...state,
                advert: action.payload,
            };
        default:
            return state;
    }
}
