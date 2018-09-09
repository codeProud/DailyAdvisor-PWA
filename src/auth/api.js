import { http } from 'utils/http';

const registerUser = user => http.post('/registration', user);
const registerUserConfirm = token => http.post('/registrationConfirm', { token });
const loginUser = user => http.post('/login', user);
const logoutUser = user => http.post('/logout');
const getUserProfile = () => http.get('/getUserProfile');
const getCsrf = () => http.get('/csrf');

export const authApi = {
    getCsrf,
    getUserProfile,
    loginUser,
    logoutUser,
    registerUser,
    registerUserConfirm,
};
