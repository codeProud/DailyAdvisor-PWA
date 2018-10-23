import { http } from 'utils/http';

import * as res from 'utils/mockedResponses/advertisement';

const getAdvert = () => {
    return new Promise((resolve, reject) => {
        const condition = true;
        if (condition) {
            resolve(res.getAdvertSuccess);
        } else {
            reject(res.getAdvertFail);
        }
    });
};

const getAdvertByUserId = () => {
    return new Promise((resolve, reject) => {
        const condition = true;
        if (condition) {
            resolve(res.getAdvertByUserIdSuccess);
        } else {
            reject(res.getAdvertByUserIdFail);
        }
    });
};

const getAllAdverts = () => {
    return new Promise((resolve, reject) => {
        const condition = true;
        if (condition) {
            resolve(res.getAllAdvertsSuccess);
        } else {
            reject(res.getAllAdvertsFail);
        }
    });
};

const addAdvert = () => {
    return new Promise((resolve, reject) => {
        const condition = true;
        if (condition) {
            resolve(res.addAdvertSuccess);
        } else {
            reject(res.addAdvertFail);
        }
    });
};

export const advertApi = {
    getAdvert,
    getAdvertByUserId,
    getAllAdverts,
    addAdvert,
};
