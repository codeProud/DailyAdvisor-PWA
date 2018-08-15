import React from 'react';
import { NavLink } from 'react-router-dom';

import { bottomNavItems } from 'constants/bottomNavItems';

import IconButton from 'components/IconButton';

import * as S from './styled.js';

const BottomNavigation = () => {
    return (
        <S.Container>
            <S.NavigationContainer>
                {bottomNavItems.map(navItem => (
                    <S.Item key={navItem.id}>
                        <NavLink to={navItem.url}>
                            <IconButton
                                src={navItem.icon}
                                alt={navItem.payload.alt}
                                height="50px"
                                width="50px"
                            />
                        </NavLink>
                    </S.Item>
                ))}
            </S.NavigationContainer>
        </S.Container>
    );
};

export default BottomNavigation;
