import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import { getUserData } from '../../user/actions';

import Header from 'components/Header';
import BottomNavigation from 'components/BottomNavigation';

import Profile from 'pages/Profile';
import Calendar from 'pages/Calendar';

class Main extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route path={`${this.props.match.path}/profile`} component={Profile} />
                    <Route path={`${this.props.match.path}/calendar`} component={Calendar} />
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
