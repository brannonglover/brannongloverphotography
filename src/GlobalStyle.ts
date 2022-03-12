import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
    // CSS Reset
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
    margin: 0;
    }

    body {
        font-size: calc(.43em + 1vw);
        font-family: "Roboto", sans-serif;
    }
    a {
        text-decoration: none;
        color: #000;
    }
`;

export const AppContainer = styled.div`
    width: 100%;
    padding: 0 .5em;
`;