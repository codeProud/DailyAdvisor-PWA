import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`;

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FirstLine = styled.div`
    color: ${props => (props.inverse ? 'black' : 'white')};
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
`;

const SecondLine = styled.div`
    color: ${props => (props.inverse ? 'black' : 'white')};
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
`;

const TagLine = props => {
    const { first, second } = props;

    return (
        <Container>
            <VerticalContainer>
                <FirstLine>{first}</FirstLine>
                <SecondLine>{second}</SecondLine>
            </VerticalContainer>
        </Container>
    );
};

export default TagLine;
