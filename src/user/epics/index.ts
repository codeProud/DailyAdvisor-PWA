import { combineEpics, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

import * as actions from '../actions';

// this is mocked one api, replace with real later
import { userApi } from '../mockedApi';

// real api
// import { userApi } from '../api';

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

    const upgradeToCoachEpic = action$ =>
        action$.pipe(
            ofType(actions.USER_UPGRADE_TO_COACH),
            switchMap(action =>
                userApi
                    .upgradeToCoach()
                    .then(actions.userUpgradeToCoachFulfilled)
                    .catch(actions.userUpgradeToCoachRejected),
            ),
        );

    return combineEpics(getUserDataEpic, upgradeToCoachEpic);
}
