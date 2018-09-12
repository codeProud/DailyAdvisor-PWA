import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { withRouter } from 'react-router';

import avatar from '../../assets/avatar.png';
import arrowLeft from '../../assets/icons/arrow_left.svg';
import calendar from '../../assets/icons/calendar.svg';

import IconButton from 'components/IconButton';
import Image from 'components/Image';

import * as S from './styled';

const Header = props => {
    const { pathname } = props.location;
    const { goBack } = props.history;

    return (
        <S.Container>
            {pathname === '/main' || pathname === '/main/dashboard' ? (
                <NavLink to={'/main/profile'}>
                    <Image
                        src={avatar}
                        alt="Logged in person profile picture"
                        width="50"
                        height="50"
                    />
                </NavLink>
            ) : (
                <IconButton src={arrowLeft} alt="Go to calendar" height="50px" onClick={goBack} />
            )}
            <S.MainHeading>daily advisor</S.MainHeading>
            <NavLink to={'/main/calendar'}>
                <IconButton src={calendar} alt="Go to calendar" height="50px" width="50px" />
            </NavLink>
        </S.Container>
    );
};

export default withRouter(Header);
