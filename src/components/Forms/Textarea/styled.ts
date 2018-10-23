import styled from 'styled-components';

import { formGrey, formText } from 'constants/colors';

export const Textarea = styled.textarea`
    background: ${formGrey};
    display: block;
    width: 100%;
    margin: 16px 0 0 0;
    font-size: 10px;
    font-weight: 300;
    color: ${formText};
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    outline: none;
    box-sizing: border-box;
    border: 0px solid #ccc;
    padding: 3%;
`;
