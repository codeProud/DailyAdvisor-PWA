import styled from 'styled-components';

const dayWidth = 40;

export const Calendar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${dayWidth * 7}px;
`;

export const Month = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
`;

export const Days = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
`;

export const Day = styled.div`
    border-radius: 10px;
    height: ${dayWidth}px;
    width: ${dayWidth}px;

    background: ${props => (props.isTraining ? 'red' : 'white')};

    border: 1px solid black;
    border-top: ${props => (props.topEdge ? '1px solid black' : 'none')};
    border-left: ${props => (props.leftEdge ? '1px solid black' : 'none')};
`;
