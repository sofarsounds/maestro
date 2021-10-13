import { createGlobalStyle, css } from '../lib/styledComponents';

import IconFontTTF from '../assets/fonts/sofarsounds-icon-font.ttf';
import IconFontWOFF from '../assets/fonts/sofarsounds-icon-font.woff';
import IconFontSVG from '../assets/fonts/sofarsounds-icon-font.svg';

export default createGlobalStyle`
  ${({ theme }) => css`
    /* open-sans-regular - latin */
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      src: url('../assets/fonts/open-sans-v26-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../assets/fonts/open-sans-v26-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../assets/fonts/open-sans-v26-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
           url('../assets/fonts/open-sans-v26-latin-regular.woff') format('woff'), /* Modern Browsers */
           url('../assets/fonts/open-sans-v26-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../assets/fonts/open-sans-v26-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
    }
    /* open-sans-600 - latin */
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      src: url('../assets/fonts/open-sans-v26-latin-600.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../assets/fonts/open-sans-v26-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../assets/fonts/open-sans-v26-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
           url('../assets/fonts/open-sans-v26-latin-600.woff') format('woff'), /* Modern Browsers */
           url('../assets/fonts/open-sans-v26-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../assets/fonts/open-sans-v26-latin-600.svg#OpenSans') format('svg'); /* Legacy iOS */
    }
    /* open-sans-700 - latin */
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      src: url('../assets/fonts/open-sans-v26-latin-700.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../assets/fonts/open-sans-v26-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../assets/fonts/open-sans-v26-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
           url('../assets/fonts/open-sans-v26-latin-700.woff') format('woff'), /* Modern Browsers */
           url('../assets/fonts/open-sans-v26-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../assets/fonts/open-sans-v26-latin-700.svg#OpenSans') format('svg'); /* Legacy iOS */
    }
    /* open-sans-800 - latin */
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 800;
      src: url('../assets/fonts/open-sans-v26-latin-800.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../assets/fonts/open-sans-v26-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../assets/fonts/open-sans-v26-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
           url('../assets/fonts/open-sans-v26-latin-800.woff') format('woff'), /* Modern Browsers */
           url('../assets/fonts/open-sans-v26-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../assets/fonts/open-sans-v26-latin-800.svg#OpenSans') format('svg'); /* Legacy iOS */
    }

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
    }

    body {
      font-size: ${theme.fontSizes.base};
      color: ${theme.colors.backToBlack};
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

    a {
      color: ${theme.colors.backToBlack};
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
