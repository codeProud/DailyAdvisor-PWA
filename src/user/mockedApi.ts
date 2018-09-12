import { http } from 'utils/http';

import * as res from 'utils/mockedResponses/user';

const getUserProfile = userId => http.get(`/getUserProfile/${userId}`);
// const getOwnProfile = () => http.get(`/getUserProfile`);

const getOwnProfile = () => {
    return new Promise((resolve, reject) => {
        const condition = true;
        if (condition) {
            resolve(res.getOwnProfileSuccess);
        } else {
            reject(res.getOwnProfileFail);
        }
    });
};

const upgradeToCoach = () => {
    return new Promise((resolve, reject) => {
        const condition = true;
        if (condition) {
            resolve(res.upgradeToCoachSuccess);
        } else {
            reject(res.upgradeToCoachFail);
        }
    });
};

export const userApi = {
    getUserProfile,
    getOwnProfile,
    upgradeToCoach,
};
