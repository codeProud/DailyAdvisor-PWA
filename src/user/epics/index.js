import { combineEpics, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

import * as actions from '../actions';

// import { userApi } from '../api';

// remove mocked one when backend will work properly on new microservices
import { userApi } from '../mockedApi';

// uncomment it when requesting user from backend will fully work
// export function userDataEpicFactory() {
//     const getUserDataEpic = action$ =>
//         action$.pipe(
//             ofType(actions.GET_USER_DATA),
//             switchMap(action =>
//                 userApi
//                     .getOwnProfile()
//                     .then(data => {
//                         console.dir(data);

//                         const ciastko = getCookie('_secu');

//                         console.log(ciastko);

//                         return actions.getUserDataFulfilled(data);
//                     })
//                     .catch(actions.getUserDataRejected),
//             ),
//         );
//     return combineEpics(getUserDataEpic);
// }

// it's returning mocked data, remove it and
// replace with commented one when backend will be rewrite and working
export function userDataEpicFactory() {
    const getUserDataEpic = action$ =>
        action$.pipe(
            ofType(actions.GET_USER_DATA),
            switchMap(action =>
                userApi
                    .getOwnProfile()
                    .then(data => actions.getUserDataFulfilled(data))
                    .catch(actions.getUserDataRejected),
            ),
        );
    return combineEpics(getUserDataEpic);
}
