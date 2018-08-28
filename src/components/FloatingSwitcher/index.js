import React from 'react';

import coach from '../../assets/icons/coach.svg';
import client from '../../assets/icons/client.svg';

import * as S from './styled';

const FloatingSwitcher = ({ onClick, userMode }) => (
    <S.Container>
        <S.Switcher onClick={onClick}>
            {userMode === 'coach' ? (
                <img src={coach} alt="Coach icon" />
            ) : (
                <img src={client} alt="Client icon" />
            )}
        </S.Switcher>
    </S.Container>
);

export default FloatingSwitcher;
