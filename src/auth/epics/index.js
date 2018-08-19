import { combineEpics, ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';

import * as actions from '../actions';
import { authApi } from '../api';
import { history } from '../../store';

// import { deleteCookie } from 'utils/cookie';

export function authEpicFactory() {
    const registerUserEpic = action$ =>
        action$.pipe(
            ofType(actions.REGISTER_USER),
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
            ofType(actions.REGISTER_USER_CONFIRM),
            switchMap(action =>
                authApi
                    .registerUserConfirm(action.payload)
                    .catch(actions.registerUserConfirmRejected),
            ),
            map(res => {
                return actions.registerUserConfirmFulfilled();
            }),
        );

    const loginUserEpic = actions$ =>
        actions$.pipe(
            ofType(actions.LOGIN_USER),
            map(action => actions.getCsrf(action.payload)),
        );

    const csrfEpic = actions$ =>
        actions$.pipe(
            ofType(actions.GET_CSRF),
            switchMap(action =>
                authApi
                    .getCsrf(action.payload)
                    .then(() => actions.getCsrfFulfilled(action.payload))
                    .catch(actions.getCsrfRejected),
            ),
        );

    const csrfFullfilledEpic = actions$ =>
        actions$.pipe(
            ofType(actions.GET_CSRF_FULFILLED),
            switchMap(action =>
                authApi
                    .loginUser(action.payload)
                    .then(() => {
                        localStorage.setItem('authenticated', 'true');
                        history.push('/');
                        return actions.loginUserFulfilled(action.payload);
                    })
                    .catch(actions.loginUserRejected),
            ),
        );

    const logoutUserEpic = action$ =>
        action$.pipe(
            ofType(actions.LOGOUT_USER),
            switchMap(action =>
                authApi
                    .logoutUser()
                    .then(() => {
                        localStorage.removeItem('authenticated');
                        history.push('/');
                        return actions.logoutUserFulfilled();
                    })
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
