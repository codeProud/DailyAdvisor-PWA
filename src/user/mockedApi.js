import { http } from 'utils/http';

const getUserProfile = userId => http.get(`/getUserProfile/${userId}`);
// const getOwnProfile = () => http.get(`/getUserProfile`);

const getOwnProfile = () => {
    return new Promise((resolve, reject) => {
        const condition = true;
        if (condition) {
            resolve({
                status: 200,
                statusText: 'OK',
                data: {
                    about: 'Dreamer who loves tee shirts, travelling and meeting new people.',
                    city: 'Katowice',
                    lastName: 'Krawczyk',
                    name: 'Marcin',
                    dateOfBirth: '1991-02-15',
                    userId: '1',
                    userType: 'client',
                    email: 'marckraw@icloud.com',
                    profilePictureId: '12345678901234567890',
                },
            });
        } else {
            reject({ error: `Couldn't fetch user` });
        }
    });
};

export const userApi = {
    getUserProfile,
    getOwnProfile,
};
