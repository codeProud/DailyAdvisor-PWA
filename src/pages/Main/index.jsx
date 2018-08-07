import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import { getUserData } from '../../user/actions';

import Profile from 'pages/Profile';

class Main extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        return (
            <Fragment>
                <div>Main</div>
                <NavLink to={'../'}>dupa</NavLink>
                <Switch>
                    <Route path={`${this.props.match.path}/profile`} component={Profile} />
                </Switch>
            </Fragment>
        );
    }
}

export default connect(
    null,
    { getUserData },
)(Main);
