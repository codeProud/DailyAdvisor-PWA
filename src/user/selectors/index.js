import { createSelector } from 'reselect';

export const user = createSelector(state => state.user, user => user);
