import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --main-bg-color: #F4F4F4;

    --main-text-color: #424242;
    --second-text-color: #7f59b5;
    --placeholder-text-color: #666666;
    --active-text-color: #ebb848;

    --main-font: 'Roboto', sans-serif;
  }

  body {
    margin: 0 auto;
    height: 100vh;

    font-family: var(--main-font);
    font-weight: 300;
    color: var(--main-text-color);
    background-color: var(--main-bg-color);
  }
  
  #root {
    height: 100%;
  }
`;
