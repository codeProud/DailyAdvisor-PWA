import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
    width: ${props => (props.width ? props.width : '200px')};
`;

const IconButton = props => {
    return <Icon width={props.width} src={props.src} alt={props.alt} />;
};

export default IconButton;
