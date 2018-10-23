import { combineReducers } from 'redux';

import { advertisement } from './advertisement/reducers';
import { auth } from './auth/reducers';
import { user } from './user/reducers/';

import { calendar } from 'pages/Calendar/reducers/calendar';

export const rootReducer = combineReducers({
    auth,
    user,
    calendar,
    advertisement,
});
