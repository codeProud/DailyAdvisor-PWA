export const GET_USER_DATA = 'GET_USER_DATA';
export const getUserData = payload => ({
    payload,
    type: GET_USER_DATA,
});

export const GET_USER_DATA_FULFILLED = 'GET_USER_DATA_FULFILLED';
export const getUserDataFulfilled = payload => ({
    type: GET_USER_DATA_FULFILLED,
    payload,
});

export const GET_USER_DATA_REJECTED = 'GET_USER_DATA_REJECTED';
export const getUserDataRejected = payload => ({
    type: GET_USER_DATA_REJECTED,
    payload,
});

export const USER_UPGRADE_TO_COACH = '[USER] UPGRADE_TO_COACH';
export const userUpgradeToCoach = () => ({
    type: USER_UPGRADE_TO_COACH,
});

export const USER_UPGRADE_TO_COACH_FULFILLED = '[USER] UPGRADE_TO_COACH_FULFILLED';
export const userUpgradeToCoachFulfilled = payload => ({
    payload,
    type: USER_UPGRADE_TO_COACH_FULFILLED,
});

export const USER_UPGRADE_TO_COACH_REJECTED = '[USER] UPGRADE_TO_COACH_REJECTED';
export const userUpgradeToCoachRejected = payload => ({
    payload,
    type: USER_UPGRADE_TO_COACH_REJECTED,
});

export const USER_CHANGE_USER_MODE = 'USER_CHANGE_USER_MODE';
export const userChangeUserMode = () => ({
    type: USER_CHANGE_USER_MODE,
});
