import { createGlobalStyle, css } from '../lib/styledComponents';

import OpenSansRegular from '../assets/fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from '../assets/fonts/OpenSans-SemiBold.ttf';
import OpenSansBold from '../assets/fonts/OpenSans-Bold.ttf';
import OpenSansExtraBold from '../assets/fonts/OpenSans-ExtraBold.ttf';

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

    @font-face {
      font-family: 'Open Sans Regular';
      src:
        url(${OpenSansRegular}) format('truetype'),
        url(${OpenSansSemiBold}) format('truetype'),
        url(${OpenSansBold}) format('truetype'),
        url(${OpenSansExtraBold}) format('truetype');
      font-style: normal;
    }

    body,
    html,
    * {
      font-family: "${theme.fonts.regular}", sans-serif;
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
