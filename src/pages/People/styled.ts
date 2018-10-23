import styled from 'styled-components';

export const Container = styled.div`
    background-color: red;
`;

export const Input = styled.input`
    // needs to be relative so the :focus span is positioned correctly
    position: relative;

    // bigger font size for demo purposes
    font-size: 1.5em;

    // the border gradient
    background: linear-gradient(21deg, #10abff, #1beabd);

    // the width of the input border
    padding: 3px;

    // we want inline fields by default
    display: inline-block;

    // we want rounded corners no matter the size of the field
    border-radius: 9999em;
`;
