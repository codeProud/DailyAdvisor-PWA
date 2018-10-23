import * as React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './styled';

const Button = ({ url, content, onClick, value, type, accent }: any) =>
    type === 'submit' ? (
        <S.Button accent={accent} type={type}>
            {value}
        </S.Button>
    ) : url ? (
        <NavLink to={url}>
            <S.Button accent={accent}>{value}</S.Button>
        </NavLink>
    ) : (
        <S.Button accent={accent} onClick={onClick}>
            {content}
        </S.Button>
    );

export default Button;
