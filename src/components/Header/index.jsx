import React from 'react';
import { NavLink } from 'react-router-dom';

import calendar from '../../assets/icons/calendar.svg';
import avatar from '../../assets/avatar.png';

import IconButton from 'components/IconButton';
import Image from 'components/Image';

import * as S from './styled.js';

const Header = () => {
    return (
        <S.Container>
            <NavLink to={'/main/profile'}>
                <Image
                    src={avatar}
                    alt="Logged in person profile picture"
                    width="50"
                    height="50"
                    onClick={this.toggleLogin}
                />
            </NavLink>
            <S.MainHeading>daily advisor</S.MainHeading>
            <NavLink to={'/main/calendar'}>
                <IconButton src={calendar} alt="Go to calendar" height="50px" width="50px" />
            </NavLink>
        </S.Container>
    );
};

export default Header;
