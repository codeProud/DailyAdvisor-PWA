import * as React from 'react';
import { connect } from 'react-redux';

import unknown from '../../../assets/unknown.png';

import Image from 'components/Image';

import * as S from './styled';

import { RegisterForm } from './RegisterForm';
import { registerUser } from '../../../auth/actions';

class Register extends React.Component {
    render() {
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

export default connect(
    null,
    { registerUser },
)(Register);
