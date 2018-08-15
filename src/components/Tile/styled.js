import styled from 'styled-components';

export const Container = styled.div`
    color: red;
    border-radius: 14px;
    background-image: ${props => (props.background ? `url(${props.background}` : 'green')});
    background-position: center right;
    background-size: cover;
    width: ${props => (props.width ? props.width : null)};
    height: ${props => (props.height ? props.height : null)};
`;
