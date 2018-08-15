import { http } from 'utils/http';

const getUserProfile = userId => http.get(`/getUserProfile/${userId}`);
// const getOwnProfile = () => http.get(`/getUserProfile`);

const getOwnProfile = () => {
    return new Promise((resolve, reject) => {
        const condition = true;
        if (condition) {
            resolve({ login: 'ziomek', pass: 'ziomekcos' });
        } else {
            reject({ error: 'message' });
        }
    });
};

export const userApi = {
    getUserProfile,
    getOwnProfile,
};
