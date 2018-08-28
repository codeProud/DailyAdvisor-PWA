import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createEpicMiddleware } from 'redux-observable';

import { rootReducer } from './rootReducer';
import { rootEpic } from './rootEpic';

const epicMiddleware = createEpicMiddleware();
export const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const initialState = {};
const enhancers = [];
const middleware = [epicMiddleware, historyMiddleware];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

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
