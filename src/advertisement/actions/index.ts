export const ADVERT_GET_ADVERT = '[ADVERT] GET_ADVERT';
export const getAdvert = payload => ({
    payload,
    type: ADVERT_GET_ADVERT,
});

export const ADVERT_GET_ADVERT_FULFILLED = '[ADVERT] GET_ADVERT_FULFILLED';
export const getAdvertFulfilled = payload => ({
    payload,
    type: ADVERT_GET_ADVERT_FULFILLED,
});

export const ADVERT_GET_ADVERT_REJECTED = '[ADVERT] GET_ADVERT_REJECTED';
export const getAdvertRejected = payload => ({
    payload,
    type: ADVERT_GET_ADVERT_REJECTED,
});

export const ADVERT_GET_ALL_ADVERTS = '[ADVERT] GET_ALL_ADVERTS';
export const getAllAdverts = () => ({
    type: ADVERT_GET_ALL_ADVERTS,
});

export const ADVERT_GET_ALL_ADVERTS_FULFILLED = '[ADVERT] GET_ALL_ADVERTS_FULFILLED';
export const getAllAdvertsFulfilled = payload => ({
    payload,
    type: ADVERT_GET_ALL_ADVERTS_FULFILLED,
});

export const ADVERT_GET_ALL_ADVERTS_REJECTED = '[ADVERT] GET_ALL_ADVERTS_FULFILLED';
export const getAllAdvertsRejected = payload => ({
    payload,
    type: ADVERT_GET_ALL_ADVERTS_REJECTED,
});

export const ADVERT_GET_ADVERT_BY_USER = '[ADVERT] GET_ADVERT_BY_USER';
export const getAdvertByUserId = userId => ({
    userId,
    type: ADVERT_GET_ADVERT_BY_USER,
});

export const ADVERT_GET_ADVERT_BY_USER_FULFILLED = '[ADVERT] GET_ADVERT_BY_USER_FULFILLED';
export const getAdvertByUserIdFulfilled = payload => ({
    payload,
    type: ADVERT_GET_ADVERT_BY_USER_FULFILLED,
});

export const ADVERT_GET_ADVERT_BY_USER_REJECTED = '[ADVERT] GET_ADVERT_BY_USER_FULFILLED';
export const getAdvertByUserIdRejected = payload => ({
    payload,
    type: ADVERT_GET_ADVERT_BY_USER_REJECTED,
});

export const ADVERT_ADD_ADVERT = '[ADVERT] ADD_ADVERT';
export const addAdvert = payload => ({
    payload,
    type: ADVERT_ADD_ADVERT,
});

export const ADVERT_ADD_ADVERT_FULFILLED = '[ADVERT] ADD_ADVERT_FULFILLED';
export const addAdvertFulfilled = payload => ({
    payload,
    type: ADVERT_ADD_ADVERT_FULFILLED,
});

export const ADVERT_ADD_ADVERT_REJECTED = '[ADVERT] ADD_ADVERT_FULFILLED';
export const addAdvertRejected = payload => ({
    payload,
    type: ADVERT_ADD_ADVERT_REJECTED,
});
