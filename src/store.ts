import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootEpic } from './rootEpic';
import { rootReducer } from './rootReducer';

const epicMiddleware = createEpicMiddleware();
export const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const initialState = {};
const enhancers: any[] = [];
const middleware = [epicMiddleware, historyMiddleware];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, initialState, composedEnhancers);
export const persistor = persistStore(store);

epicMiddleware.run(rootEpic);

export default store;
