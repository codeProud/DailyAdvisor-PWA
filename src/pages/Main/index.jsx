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
        const { path } = this.props.match;

        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route exact path={`${path}`} component={Dashboard} />
                    <Route path={`${path}/profile`} component={Profile} />
                    <Route path={`${path}/calendar`} component={Calendar} />
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
