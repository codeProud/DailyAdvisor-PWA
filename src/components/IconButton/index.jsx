import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
    width: ${props => (props.width ? props.width : '200px')};
    height: ${props => (props.height ? props.height : '200px')};
`;

const IconButton = props => {
    return <Icon width={props.width} height={props.height} src={props.src} alt={props.alt} />;
};

export default IconButton;
