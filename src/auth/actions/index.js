export const REGISTER_USER = 'REGISTER_USER';
export const registerUser = payload => ({
    payload,
    type: REGISTER_USER,
});

export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED';
export const registerUserFulfilled = payload => ({
    payload,
    type: REGISTER_USER_FULFILLED,
});

export const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED';
export const registerUserRejected = payload => ({
    payload,
    type: REGISTER_USER_REJECTED,
});

export const REGISTER_USER_CONFIRM = 'REGISTER_USER_CONFIRM';
export const registerUserConfirm = payload => ({
    payload,
    type: REGISTER_USER_CONFIRM,
});

export const REGISTER_USER_CONFIRM_FULFILLED = 'REGISTER_USER_CONFIRM_FULFILLED';
export const registerUserConfirmFulfilled = payload => ({
    payload,
    type: REGISTER_USER_CONFIRM_FULFILLED,
});

export const REGISTER_USER_CONFIRM_REJECTED = 'REGISTER_USER_CONFIRM_REJECTED';
export const registerUserConfirmRejected = payload => ({
    payload,
    type: REGISTER_USER_CONFIRM_REJECTED,
});

export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = payload => ({
    payload,
    type: LOGIN_USER,
});

export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED';
export const loginUserFulfilled = payload => ({
    payload,
    type: LOGIN_USER_FULFILLED,
});

export const LOGIN_USER_REJECTED = 'LOGIN_USER_REJECTED';
export const loginUserRejected = payload => ({
    payload,
    type: LOGIN_USER_REJECTED,
});

export const GET_CSRF = 'GET_CSRF';
export const getCsrf = payload => ({
    payload,
    type: GET_CSRF,
});

export const GET_CSRF_FULFILLED = 'GET_CSRF_FULFILLED';
export const getCsrfFulfilled = payload => ({
    payload,
    type: GET_CSRF_FULFILLED,
});

export const GET_CSRF_REJECTED = 'GET_CSRF_REJECTED';
export const getCsrfRejected = payload => ({
    payload,
    type: GET_CSRF_REJECTED,
});

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const LOGOUT_USER_FULFILLED = 'LOGOUT_USER_FULFILLED';
export const logoutUserFulfilled = () => ({
    type: LOGOUT_USER_FULFILLED,
});

export const LOGOUT_USER_REJECTED = 'LOGOUT_USER_REJECTED';
export const logoutUserRejected = () => ({
    type: LOGOUT_USER_REJECTED,
});
