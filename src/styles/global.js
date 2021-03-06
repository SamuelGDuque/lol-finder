import { createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './theme'

export default createGlobalStyle `
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
    min-width: 100%;
    width: 100%;
  }

  body {
    background-color: #121212 !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    margin-bottom: 0px !important;
  }
  
`;
