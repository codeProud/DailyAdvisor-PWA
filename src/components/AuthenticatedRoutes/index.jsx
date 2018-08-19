import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoutes = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={rest =>
            localStorage.getItem('authenticated') === 'true' ? (
                <Component {...rest} />
            ) : (
                <Redirect to="/" />
            )
        }
    />
);

export default AuthenticatedRoutes;
