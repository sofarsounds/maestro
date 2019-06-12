import { createGlobalStyle, css } from './lib/styledComponents';

export default createGlobalStyle`
  ${({ theme }) => css`
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
