import { createGlobalStyle } from "styled-components";
import "uikit/dist/css/uikit.min.css";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
  }
  body {
    font-size: 1.5rem;
    margin: 0;
    font-family: ${props => props.theme.fonts.main};
    line-height: 1.6;
    color: #222222;
  }
  .uk-h1, .uk-h2, .uk-h3, .uk-h4, .uk-h5, .uk-h6, .uk-heading-2xlarge, .uk-heading-large, .uk-heading-medium, .uk-heading-small, .uk-heading-xlarge, h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
  }
`;

export default GlobalStyles;
