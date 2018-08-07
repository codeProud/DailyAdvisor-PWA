import React from 'react';
import { NavLink } from 'react-router-dom';

import { bottomNavItems } from 'constants/bottomNavItems';

import IconButton from 'components/IconButton';

import * as S from './styled.js';

const BottomNavigation = () => {
    return (
        <S.Container>
            <ul>
                {bottomNavItems.map(navItem => (
                    <li key={navItem.id}>
                        <NavLink to={navItem.url}>
                            <IconButton src={navItem.icon} alt={navItem.payload.alt} width="50px" />
                        </NavLink>
                    </li>
                ))}
            </ul>
        </S.Container>
    );
};

export default BottomNavigation;
