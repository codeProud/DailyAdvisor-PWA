import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import { logoutUser } from '../../auth/actions';
import { getUserData, userChangeUserMode } from '../../user/actions';

import BottomNavigation from 'components/BottomNavigation';
import FloatingSwitcher from 'components/FloatingSwitcher';
import Header from 'components/Header';

import Calendar from 'pages/Calendar';
import Dashboard from 'pages/Dashboard';
import NotFound from 'pages/NotFound';
import People from 'pages/People';
import Profile from 'pages/Profile';
import Add from '../../advertisement/pages/Add';
import Show from '../../advertisement/pages/Show';

import { user, userMode, userModeSettings } from '../../user/selectors';

class Main extends React.Component<any, any> {
    public componentDidMount(): void {
        this.props.getUserData();
    }

    public click = () => {
        this.props.userChangeUserMode();
    };

    public render(): JSX.Element {
        const { path } = this.props.match;

        return (
            <>
                <Header />
                <Switch>
                    <Route exact={true} path={path} component={Dashboard} />
                    <Route path={`${path}/profile`} component={Profile} />
                    <Route path={`${path}/people`} component={People} />
                    <Route path={`${path}/calendar`} component={Calendar} />
                    <Route path={`${path}/advertisement/add`} component={Add} />
                    <Route path={`${path}/advertisement/show`} component={Show} />
                    <Route component={NotFound} />
                </Switch>

                {this.props.user.userType === 'coach' ? (
                    <FloatingSwitcher userMode={this.props.userMode} onClick={this.click} />
                ) : null}

                <BottomNavigation />
            </>
        );
    }
}

const mapStateToProps = state => ({
    user: user(state),
    settings: userModeSettings(state),
    userMode: userMode(state),
});

const mapDispatchToProps = { getUserData, userChangeUserMode };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main);
