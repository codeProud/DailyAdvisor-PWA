import { createGlobalStyle } from 'styled-components';

/*
    This file is for some global styles, like font-family, sizes
    or other heading, typography, colors, stuff
*/
export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Lato', sans-serif !important;
        box-sizing: border-box;;
    }

    a {
        text-decoration: none;
    }
`;
