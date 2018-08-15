import { createSelector } from 'reselect';

export const user = createSelector(state => state.userReducer, userReducer => userReducer.user);
