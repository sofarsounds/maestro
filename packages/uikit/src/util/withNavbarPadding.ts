import { css } from '../lib/styledComponents';

import theme from '../theme';

interface Props {
  stickToNavbar: boolean;
}

export default ({ stickToNavbar }: Props) => css`
    padding-top: calc(${theme.dimensions.navbarHeight.xs} + 60px);

    ${stickToNavbar &&
      css`
        padding-top: ${theme.dimensions.navbarHeight.xs};
      `}


    ${theme.media.md`
      padding-top: calc(${theme.dimensions.navbarHeight.md} + 60px);

      ${stickToNavbar &&
        css`
          padding-top: ${theme.dimensions.navbarHeight.md};
        `}
    `}

    ${theme.media.lg`
      padding-top: calc(${theme.dimensions.navbarHeight.lg} + 60px);

      ${stickToNavbar &&
        css`
          padding-top: ${theme.dimensions.navbarHeight.lg};
        `}
    `}
`;
