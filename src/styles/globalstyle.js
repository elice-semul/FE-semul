import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    position: relative;
  }

  * {
    font-family: 'SUIT', sans-serif !important;
    box-sizing: border-box;
  }
`;
