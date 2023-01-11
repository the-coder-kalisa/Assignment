import { createGlobalStyle } from "styled-components";

// privider default style to the app
export default createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    .ant-skeleton.ant-skeleton-element {
        width: 100% !important;
    }
    .ant-btn-primary:disabled {
        opacity: 0.5 !important;
    }
`;
