import { createGlobalStyle, css } from '../lib/styledComponents';

import IconFontTTF from '../assets/fonts/sofarsounds-icon-font.ttf';
import IconFontWOFF from '../assets/fonts/sofarsounds-icon-font.woff';
import IconFontSVG from '../assets/fonts/sofarsounds-icon-font.svg';

export default createGlobalStyle`
  ${({ theme }) => css`
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
      font-family: "${theme.fonts.fontFamily}", sans-serif;
      color: ${theme.colours.backToBlack};
    }

    body {
      font-size: ${theme.fontSizes.base};
    }

    html {
      box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
      box-sizing: inherit;
    }

  `}
`;
