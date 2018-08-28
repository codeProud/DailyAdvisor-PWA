export const AUTH_REGISTER_USER = '[AUTH] REGISTER_USER';
export const registerUser = payload => ({
    type: AUTH_REGISTER_USER,
    payload,
});

export const AUTH_REGISTER_USER_FULFILLED = '[AUTH] REGISTER_USER_FULFILLED';
export const registerUserFulfilled = payload => ({
    type: AUTH_REGISTER_USER_FULFILLED,
    payload,
});

export const AUTH_REGISTER_USER_REJECTED = '[AUTH] REGISTER_USER_REJECTED';
export const registerUserRejected = payload => ({
    type: AUTH_REGISTER_USER_REJECTED,
    payload,
});

export const AUTH_REGISTER_USER_CONFIRM = '[AUTH] REGISTER_USER_CONFIRM';
export const registerUserConfirm = payload => ({
    type: AUTH_REGISTER_USER_CONFIRM,
    payload,
});

export const AUTH_REGISTER_USER_CONFIRM_FULFILLED = '[AUTH] REGISTER_USER_CONFIRM_FULFILLED';
export const registerUserConfirmFulfilled = payload => ({
    type: AUTH_REGISTER_USER_CONFIRM_FULFILLED,
    payload,
});

export const AUTH_REGISTER_USER_CONFIRM_REJECTED = '[AUTH] REGISTER_USER_CONFIRM_REJECTED';
export const registerUserConfirmRejected = payload => ({
    type: AUTH_REGISTER_USER_CONFIRM_REJECTED,
    payload,
});

export const AUTH_LOGIN_USER = '[AUTH] LOGIN_USER';
export const loginUser = payload => ({
    type: AUTH_LOGIN_USER,
    payload,
});

export const AUTH_LOGIN_USER_FULFILLED = '[AUTH] LOGIN_USER_FULFILLED';
export const loginUserFulfilled = payload => ({
    type: AUTH_LOGIN_USER_FULFILLED,
    payload,
});

export const AUTH_LOGIN_USER_REJECTED = '[AUTH] LOGIN_USER_REJECTED';
export const loginUserRejected = payload => ({
    type: AUTH_LOGIN_USER_REJECTED,
    payload,
});

export const AUTH_GET_CSRF = '[AUTH] GET_CSRF';
export const getCsrf = payload => ({
    type: AUTH_GET_CSRF,
    payload,
});

export const AUTH_GET_CSRF_FULFILLED = '[AUTH] GET_CSRF_FULFILLED';
export const getCsrfFulfilled = payload => ({
    type: AUTH_GET_CSRF_FULFILLED,
    payload,
});

export const AUTH_GET_CSRF_REJECTED = '[AUTH] GET_CSRF_REJECTED';
export const getCsrfRejected = payload => ({
    type: AUTH_GET_CSRF_REJECTED,
    payload,
});

export const AUTH_LOGOUT_USER = '[AUTH] LOGOUT_USER';
export const logoutUser = () => ({
    type: AUTH_LOGOUT_USER,
});

export const AUTH_LOGOUT_USER_FULFILLED = '[AUTH] LOGOUT_USER_FULFILLED';
export const logoutUserFulfilled = () => ({
    type: AUTH_LOGOUT_USER_FULFILLED,
});

export const AUTH_LOGOUT_USER_REJECTED = '[AUTH] LOGOUT_USER_REJECTED';
export const logoutUserRejected = () => ({
    type: AUTH_LOGOUT_USER_REJECTED,
});
