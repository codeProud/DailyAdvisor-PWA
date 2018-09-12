import { http } from 'utils/http';

const getUserProfile = userId => http.get(`/getUserProfile/${userId}`);
const getOwnProfile = () => http.get(`/getUserProfile`);
const upgradeToCoach = () => http.get(`/upgradeToCoach`); // check if it is working, after synchro with backend

export const userApi = {
    getUserProfile,
    getOwnProfile,
};
