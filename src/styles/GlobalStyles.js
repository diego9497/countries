import { createGlobalStyle, css, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    
    @media screen and (max-width: 375px){
      font-size: 14px;
    }
  }

  .max-width{
    padding: 0 60px;
    height: 100%;

    @media screen and (max-width: 720px) {
      padding: 0 20px;
    }
  }

`;

export const Shadow = css`
  box-shadow: ${(props) => props.theme.shadow};
`;
