import { createSelector } from 'reselect';

export const adverts = createSelector((state: any) => state.adverts, adverts => adverts);

export const advert = createSelector((state: any) => state.advert, advert => advert);
