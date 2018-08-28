import { data } from './data';

const fetchTrainings = () => Promise.resolve(data);

export const calendarApi = {
    fetchTrainings,
};
