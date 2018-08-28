import { createSelector } from 'reselect';

import settings from '../../config/userModeSettings';

export const user = createSelector(state => state.user, user => user.data);

export const userMode = createSelector(state => state.user.mode, mode => mode);

export const userModeSettings = createSelector(state => state.user.mode, mode => settings[mode]);
