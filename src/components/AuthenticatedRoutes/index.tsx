import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { authenticatedSelector } from '../../auth/selectors';

const AuthenticatedRoutes = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (rest.authenticated ? <Component {...props} /> : <Redirect to="/" />)}
    />
);

const mapStateToProps = state => ({
    authenticated: authenticatedSelector(state),
});

export default connect(
    mapStateToProps,
    null,
)(AuthenticatedRoutes);
