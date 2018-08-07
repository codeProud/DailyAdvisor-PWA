import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import unknown from '../../../assets/unknown.png';
import { isLoggedInSelector } from '../../../auth/selectors';
import { getCookie } from 'utils/cookie';

import Image from 'components/Image';

import * as S from './styled';

import { RegisterForm } from './RegisterForm';
import { registerUser } from '../../../auth/actions';

class Register extends React.Component {
    constructor(props) {
        super(props);

        const isLoggedIn = getCookie('_secu');

        this.state = {
            isLoggedIn,
        };
    }

    render() {
        if (this.props.isLoggedIn === true || this.state.isLoggedIn) {
            return <Redirect to="/main" />;
        }

        return (
            <S.Container>
                <S.LoginContainer>
                    <S.LoginBox>
                        <S.MainHeading>daily advisor</S.MainHeading>
                        <Image src={unknown} alt="Unknown person profile picture" width="100" />
                        <RegisterForm onSubmit={this.props.registerUser} />;
                    </S.LoginBox>
                </S.LoginContainer>
            </S.Container>
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
    { registerUser },
)(Register);
