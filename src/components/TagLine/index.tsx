import * as React from 'react';
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

interface LineProps {
    invertColor?: boolean;
}

const FirstLine = styled.div`
    color: ${(props: LineProps) => (props.invertColor ? 'black' : 'white')};
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
`;

const SecondLine = styled.div`
    color: ${(props: LineProps) => (props.invertColor ? 'black' : 'white')};
    font-size: 24px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
`;

const TagLine = ({ first, second, invertColor }) => (
    <Container>
        <VerticalContainer>
            <FirstLine invertColor={invertColor}>{first}</FirstLine>
            <SecondLine invertColor={invertColor}>{second}</SecondLine>
        </VerticalContainer>
    </Container>
);

export default TagLine;
