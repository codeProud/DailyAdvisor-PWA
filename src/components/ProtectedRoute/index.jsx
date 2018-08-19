import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLoggedIn = false;

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={() => (isLoggedIn ? <Component {...rest} /> : <Redirect to="/" />)} />
);

export default ProtectedRoute;
