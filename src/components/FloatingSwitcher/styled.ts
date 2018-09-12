import styled from 'styled-components';

import { lightGray, mediumGray } from 'constants/colors';

export const Container = styled.div`
    position: fixed;
    bottom: 80px;
    right: 15px;
`;
export const Switcher = styled.div`
    background-color: ${lightGray};
    width: 50px;
    height: 50px;
    border: 1px solid ${mediumGray};
    border-radius: 50%;
    padding: 5px;
`;
