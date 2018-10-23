import { http } from 'utils/http';

const getAdvert = userId => http.get(`/getUserProfile/${userId}`);
const getAdvertByUserId = userId => http.get(`/advertisement/get/${userId}`);
const getAllAdverts = () => http.get(`/advertisement/getAll`);
const addAdvert = payload => http.post('/advertisement/add', payload);

export const userApi = {
    getAdvert,
    getAdvertByUserId,
    getAllAdverts,
    addAdvert,
};
