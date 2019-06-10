import styled, { css } from '../lib/styledComponents';

export const H1 = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h1};
    letter-spacing: -1.5px;
    color: ${theme.colours.backToBlack};

    // TODO scale up fontSizes
    ${theme.media.tablet`
      font-size: ${theme.fontSizes.h1};
    `};

    ${theme.media.desktop`
      font-size: ${theme.fontSizes.h1};
    `};
  `};
`;
