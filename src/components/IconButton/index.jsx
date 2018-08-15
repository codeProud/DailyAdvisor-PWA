import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
    width: ${props => (props.width ? props.width : null)};
    height: ${props => (props.height ? props.height : null)};
`;

const IconButton = props => {
    return (
        <Icon
            width={props.width}
            height={props.height}
            src={props.src}
            alt={props.alt}
            {...props}
        />
    );
};

export default IconButton;
