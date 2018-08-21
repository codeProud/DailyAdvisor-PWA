import { http } from 'utils/http';

import * as responses from 'utils/mockedResponses/user';

const getUserProfile = userId => http.get(`/getUserProfile/${userId}`);
// const getOwnProfile = () => http.get(`/getUserProfile`);

const getOwnProfile = () => {
    return new Promise((resolve, reject) => {
        const condition = true;
        if (condition) {
            resolve(responses.getOwnProfile);
        } else {
            reject({ error: `Couldn't fetch user` });
        }
    });
};

export const userApi = {
    getUserProfile,
    getOwnProfile,
};
