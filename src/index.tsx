import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import store, { history, persistor } from './store';

// import AuthenticatedRoutes from 'components/AuthenticatedRoutes';
// import NonAuthenticatedRoutes from 'components/NonAuthenticatedRoutes';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import NonAuthenticatedRoutes from './components/NonAuthenticatedRoutes';

import Main from './pages/Main';
import NotFound from './pages/NotFound';

// import Main from 'pages/Main';
// import NotFound from 'pages/NotFound';
import { GlobalStyle } from './styled';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
                <React.Fragment>
                    <GlobalStyle />
                    <Switch>
                        <AuthenticatedRoutes path="/main" component={Main} />
                        <NonAuthenticatedRoutes path="/" />
                        <Route component={NotFound} />
                    </Switch>
                </React.Fragment>
            </Router>
        </PersistGate>
    </Provider>,
    target,
);
