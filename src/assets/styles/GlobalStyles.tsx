import { createGlobalStyle } from 'styled-components';
import { baseTheme } from './GlobalTheme';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${baseTheme.colors.bg};
    overflow: hidden;
  }
  li {
    list-style-type: none;
  }
  * {
      font-family: "Roboto";
    }


  
  @media (max-width: 500px) {
    * {
      font-size: .9rem;
    }
  }

`;
 