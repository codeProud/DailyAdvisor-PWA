import { createSelector } from 'reselect';

export const isLoggedInSelector = createSelector(
    state => state.auth.isLoggedIn,
    isLoggedIn => isLoggedIn,
);
