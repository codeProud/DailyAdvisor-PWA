import * as React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
    width: ${props => props.width || '40px'};
    height: ${props => props.height || '40px'};
`;

const IconButton = props => {
    return <Icon {...props} />;
};

export default IconButton;
