import { http } from 'utils/http';

const getUserProfile = userId => http.get(`/getUserProfile/${userId}`);
const getOwnProfile = () => http.get(`/getUserProfile`);

export const userApi = {
    getUserProfile,
    getOwnProfile,
};
