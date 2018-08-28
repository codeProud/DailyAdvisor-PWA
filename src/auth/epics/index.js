import { combineEpics, ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';

import * as actions from '../actions';
import { authApi } from '../api';

export function authEpicFactory() {
    const registerUserEpic = action$ =>
        action$.pipe(
            ofType(actions.AUTH_REGISTER_USER),
            switchMap(action =>
                authApi.registerUser(action.payload).catch(actions.registerUserRejected),
            ),
            map(res => {
                if (res.status === 226) {
                    return actions.registerUserRejected('Email already in use');
                }
                return actions.registerUserFulfilled();
            }),
        );

    const registerUserConfirm = action$ =>
        action$.pipe(
            ofType(actions.AUTH_REGISTER_USER_CONFIRM),
            switchMap(action =>
                authApi
                    .registerUserConfirm(action.payload)
                    .then(actions.registerUserConfirmFulfilled)
                    .catch(actions.registerUserConfirmRejected),
            ),
        );

    const loginUserEpic = actions$ =>
        actions$.pipe(
            ofType(actions.AUTH_LOGIN_USER),
            map(action => actions.getCsrf(action.payload)),
        );

    const csrfEpic = actions$ =>
        actions$.pipe(
            ofType(actions.AUTH_GET_CSRF),
            switchMap(action =>
                authApi
                    .getCsrf(action.payload)
                    .then(() => actions.getCsrfFulfilled(action.payload))
                    .catch(actions.getCsrfRejected),
            ),
        );

    const csrfFullfilledEpic = actions$ =>
        actions$.pipe(
            ofType(actions.AUTH_GET_CSRF_FULFILLED),
            switchMap(action =>
                authApi
                    .loginUser(action.payload)
                    .then(actions.loginUserFulfilled)
                    .catch(actions.loginUserRejected),
            ),
        );

    const logoutUserEpic = action$ =>
        action$.pipe(
            ofType(actions.AUTH_LOGOUT_USER),
            switchMap(action =>
                authApi
                    .logoutUser()
                    .then(actions.logoutUserFulfilled)
                    .catch(actions.logoutUserRejected),
            ),
        );

    return combineEpics(
        csrfEpic,
        csrfFullfilledEpic,
        registerUserEpic,
        loginUserEpic,
        logoutUserEpic,
        registerUserConfirm,
    );
}
