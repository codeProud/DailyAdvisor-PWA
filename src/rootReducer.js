import { combineReducers } from 'redux';

import { user } from './user/reducers/';
import { auth } from './auth/reducers';

export const rootReducer = combineReducers({
    auth,
    user,
});
