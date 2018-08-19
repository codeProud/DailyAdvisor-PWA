import { createSelector } from 'reselect';

export const authenticatedSelector = createSelector(
    state => state.auth.authenticated,
    authenticated => authenticated,
);
