import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import { getUserData } from '../../user/actions';

import Header from 'components/Header';
import BottomNavigation from 'components/BottomNavigation';

import Dashboard from 'pages/Dashboard';
import Profile from 'pages/Profile';
import Calendar from 'pages/Calendar';
import NotFound from 'pages/NotFound';

class Main extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path={`${this.props.match.path}`} component={Dashboard} />
                    <Route path={`${this.props.match.path}/profile`} component={Profile} />
                    <Route path={`${this.props.match.path}/calendar`} component={Calendar} />
                    <Route component={NotFound} />
                </Switch>
                <BottomNavigation />
            </Fragment>
        );
    }
}

export default connect(
    null,
    { getUserData },
)(Main);
