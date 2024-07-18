import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    outline: none;
    font-size: 16px;
    font-family: "Roboto Slab", serif;
  }

  a {
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter .2s;
  }

  button:hover, a:hover{
    filter: brightness(0.9);
  }
`;