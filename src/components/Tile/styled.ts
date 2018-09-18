import styled from 'styled-components';

interface ContainerProps {
    background: string;
    width: string;
    height: string;
}

export const Container = styled.div`
    border-radius: 14px;
    background-image: ${(props: ContainerProps) =>
        props.background ? `url(${props.background})` : `green`};
    background-position: center right;
    background-size: cover;
    width: ${(props: ContainerProps) => props.width || '300px'};
    height: ${(props: ContainerProps) => props.height || '120px'};
`;
