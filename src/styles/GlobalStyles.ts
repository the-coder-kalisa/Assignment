import { createGlobalStyle } from "styled-components";

// privider default style to the app
export default createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    :where(.css-dev-only-do-not-override-sk7ap8).ant-skeleton.ant-skeleton-element {
        width: 100%;
    }
    :where(.css-dev-only-do-not-override-sk7ap8).ant-btn-primary:disabled {
        opacity: 0.5;
    }
`;
