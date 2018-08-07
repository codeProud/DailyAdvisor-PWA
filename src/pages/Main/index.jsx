import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import { getUserData } from '../../user/actions';
import { logoutUser } from '../../auth/actions';
import { isLoggedInSelector } from '../../auth/selectors';
import { getCookie } from 'utils/cookie';

import Dashboard from 'pages/Dashboard';
import Profile from 'pages/Profile';

class Main extends React.Component {
    constructor(props) {
        super(props);

        const isLoggedIn = getCookie('_secu');

        this.state = {
            isLoggedIn,
        };
    }

    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        if (!this.state.isLoggedIn && !this.props.isLoggedIn) {
            return <Redirect to="/" />;
        }

        return (
            <Fragment>
                <div>
                    <NavLink to={`${this.props.match.path}/dashboard`}>Dashboard</NavLink>
                    <span> - </span>
                    <NavLink to={`${this.props.match.path}/profile`}>Profile</NavLink>
                    <button onClick={this.props.logoutUser}>Wyloguj</button>
                </div>
                <div>
                    <Switch>
                        <Route path={`${this.props.match.path}/dashboard`} component={Dashboard} />
                        <Route path={`${this.props.match.path}/profile`} component={Profile} />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: isLoggedInSelector(state),
    };
}

export default connect(
    mapStateToProps,
    { getUserData, logoutUser },
)(Main);
