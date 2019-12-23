import { createGlobalStyle, css } from '../lib/styledComponents';

import IconFontTTF from '../assets/fonts/sofarsounds-icon-font.ttf';
import IconFontWOFF from '../assets/fonts/sofarsounds-icon-font.woff';
import IconFontSVG from '../assets/fonts/sofarsounds-icon-font.svg';

export default createGlobalStyle`
  ${({ theme }) => css`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap');

    @font-face {
      font-family: 'sofarsounds-icon-font';
      src:
        url(${IconFontTTF}) format('truetype'),
        url(${IconFontWOFF}) format('woff'),
        url(${IconFontSVG}) format('svg');
      font-weight: normal;
      font-style: normal;
    }

    body,
    html,
    * {
      font-family: "${theme.fonts.regular}", sans-serif;
      color: ${theme.colors.backToBlack};
    }

    body {
      font-size: ${theme.fontSizes.base};
      margin: 0px;
    }

    html {
      box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
      box-sizing: inherit;
    }

    a:link, a:visited {
      text-decoration: none;
    }

    button {
      background: none;
      margin-left: 0px;
      margin-right: 0px;
    }
  `}
`;
