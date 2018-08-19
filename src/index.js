import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';

import store, { history } from 'store';

import AuthenticatedRoutes from 'components/AuthenticatedRoutes';
import NonAuthenticatedRoutes from 'components/NonAuthenticatedRoutes';

import Main from 'pages/Main';
import NotFound from 'pages/NotFound';

import { StyledMainApp } from './styles';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <Router history={history}>
            <StyledMainApp>
                <Switch>
                    <AuthenticatedRoutes path="/main" component={Main} />
                    <NonAuthenticatedRoutes path="/" />
                    <Route component={NotFound} />
                </Switch>
            </StyledMainApp>
        </Router>
    </Provider>,
    target,
);
