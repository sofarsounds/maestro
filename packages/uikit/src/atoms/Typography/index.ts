import styled, { css } from '../../lib/styledComponents';
import { withTypography } from '../../util';

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.title};
    font-weight: 800;
    letter-spacing: -2px;
    color: ${theme.colours.backToBlack};
    margin: 0;
    padding: 0;

    // TODO scale up fontSizes
    ${theme.media.md`
      font-size: ${theme.fontSizes.title};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.title};
    `};
  `};

  ${withTypography}
`;
export const H1 = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h1};
    font-weight: normal;
    letter-spacing: -1.5px;
    color: ${theme.colours.backToBlack};
    margin: 0;
    padding: 0;

    // TODO scale up fontSizes
    ${theme.media.md`
      font-size: ${theme.fontSizes.h1};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.h1};
    `};
  `};

  ${withTypography}
`;

export const H2 = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h2};
    font-weight: normal;
    letter-spacing: -0.5px;
    color: ${theme.colours.backToBlack};
    margin: 0;
    padding: 0;

    // TODO scale up fontSizes
    ${theme.media.md`
      font-size: ${theme.fontSizes.h2};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.h2};
    `};
  `};

  ${withTypography}
`;

export const H3 = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h3};
    font-weight: normal;
    letter-spacing: normal;
    color: ${theme.colours.backToBlack};
    margin: 0;
    padding: 0;

    // TODO scale up fontSizes
    ${theme.media.md`
      font-size: ${theme.fontSizes.h3};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.h3};
    `};
  `};

  ${withTypography}
`;

export const H4 = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h4};
    font-weight: normal;
    letter-spacing: 0.3px;
    color: ${theme.colours.backToBlack};
    margin: 0;
    padding: 0;

    // TODO scale up fontSizes
    ${theme.media.md`
      font-size: ${theme.fontSizes.h4};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.h4};
    `};
  `};

  ${withTypography}
`;

export const H5 = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h5};
    font-weight: normal;
    letter-spacing: normal;
    color: ${theme.colours.backToBlack};
    margin: 0;
    padding: 0;

    // TODO scale up fontSizes
    ${theme.media.md`
      font-size: ${theme.fontSizes.h5};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.h5};
    `};
  `};

  ${withTypography}
`;

export const H6 = styled.h6`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h6};
    font-weight: normal;
    letter-spacing: 0.2px;
    color: ${theme.colours.backToBlack};
    margin: 0;
    padding: 0;

    // TODO scale up fontSizes
    ${theme.media.md`
      font-size: ${theme.fontSizes.h6};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.h6};
    `};
  `};

  ${withTypography}
`;

export const Subtitle = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.subtitle1};
    font-weight: normal;
    letter-spacing: 0.2px;
    color: ${theme.colours.backToBlack};
    margin: 0;
    padding: 0;

    // TODO scale up fontSizes
    ${theme.media.md`
      font-size: ${theme.fontSizes.subtitle1};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.subtitle1};
    `};
  `};

  ${withTypography}
`;

export const Subtitle2 = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.subtitle2};
    font-weight: normal;
    letter-spacing: 0.1px;
    color: ${theme.colours.backToBlack};
    margin: 0;
    padding: 0;

    // TODO scale up fontSizes
    ${theme.media.md`
      font-size: ${theme.fontSizes.subtitle2};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.subtitle2};
    `};
  `};

  ${withTypography}
`;

export const Body = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.body1};
    font-weight: normal;
    letter-spacing: 0.4px;
    color: ${theme.colours.backToBlack};
    margin: 0;
    padding: 0;

    // TODO scale up fontSizes
    ${theme.media.md`
      font-size: ${theme.fontSizes.body1};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.body1};
    `};
  `};

  ${withTypography}
`;

export const Body2 = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.body2};
    font-weight: normal;
    letter-spacing: 0.3px;
    color: ${theme.colours.backToBlack};
    margin: 0;
    padding: 0;

    // TODO scale up fontSizes
    ${theme.media.md`
      font-size: ${theme.fontSizes.body2};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.body2};
    `};
  `};

  ${withTypography}
`;

export const Overline = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.overline};
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: ${theme.colours.backToBlack};
    margin: 0;
    padding: 0;

    // TODO scale up fontSizes
    ${theme.media.md`
      font-size: ${theme.fontSizes.overline};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.overline};
    `};
  `};

  ${withTypography}
`;

export const Caption = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.caption};
    font-weight: normal;
    letter-spacing: 0.3px;
    color: ${theme.colours.backToBlack};
    margin: 0;
    padding: 0;

    // TODO scale up fontSizes
    ${theme.media.md`
      font-size: ${theme.fontSizes.caption};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.caption};
    `};
  `};

  ${withTypography}
`;

export const FormGroupLabel = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.formGroupLabel};
    font-weight: bold;
    letter-spacing: 0.1px;
    color: ${theme.colours.backToBlack};
    margin-bottom: ${theme.ruler[2]}px;
    display: block;
  `}

  ${withTypography}
`;
