import React from 'react';
import { connect } from 'react-redux';

import { registerUserConfirm } from '../../../auth/actions';

class RegisterConfirm extends React.Component {
    componentDidMount() {
        const token = this.props.match.params.token;
        this.props.registerUserConfirm(token);
    }

    render() {
        return <div>RegisterConfirm component. Wysyłam token do potwierdzenia</div>;
    }
}

export default connect(
    null,
    { registerUserConfirm },
)(RegisterConfirm);
