import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-family: 'Roboto Mono', monospace;
    }

    a {
        text-decoration: none;
        font-weight: 600;
        color: white;
    }

    ul{
        list-style: none;
    }

    body{
        /* background: linear-gradient(to top right, #e7e3e0, #e0d6d0, #e7e3e0); */
        background-color: #e0d6d0;
    }

`

export default GlobalStyle;