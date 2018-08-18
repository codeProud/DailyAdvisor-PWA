import styled from 'styled-components';

export const Container = styled.div`
    color: red;
    border-radius: 14px;
    background-image: ${props => (props.background ? `url(${props.background}` : 'green')});
    background-position: center right;
    background-size: cover;
    width: ${props => props.width || '300px'};
    height: ${props => props.height || '120px'};
`;
