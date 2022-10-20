import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  :root {
    --color-bg: #1f1f38;
    --color-bg-variant: #2c2c6c;
    --color-primary: #4db5ff;
    --color-primary-variant: rgba(77, 181, 255, .4) ;
    --color-white: #fff;
    --color-light: rgba(255, 255 ,255, .6);

    --transition: all 400ms ease;

    --container-width-xl: 75%;
    --container-width-lg: 75%;
    --container-width-md: 80%;
    --container-width-sm: 90%;
    --container-width-xs: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--color-bg);
    color: var(--color-white);
    line-height: 1.7;  
  }

  h1, h2, h3, h4, h5 {
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
  }

  .text-light {
    color: var(--color-light);
  }

  a {
    color: var(--color-primary);
    transition: var(--transition);
  }

  a:hover {
    color: var(--color-white);
  }
`

export default GlobalStyles