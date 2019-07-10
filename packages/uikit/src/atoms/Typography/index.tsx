import styled, { css } from '../../lib/styledComponents';
import { WithTypographyProps, withTypography } from '../../util';

interface TypographyProps extends WithTypographyProps {
  children?: any;
}

export const Title = styled.h1<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.title.xs};
    font-weight: 800;
    letter-spacing: -2px;
    line-height: normal;
    margin: 0;
    padding: 0;

    ${theme.media.md`
      font-size: ${theme.fontSizes.title.md};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.title.lg};
    `};
  `};

  ${withTypography}
`;
export const H1 = styled.h1<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h1.xs};
    font-weight: normal;
    letter-spacing: -1.5px;
    margin: 0;
    padding: 0;

    ${theme.media.md`
      font-size: ${theme.fontSizes.h1.md};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.h1.lg};
    `};
  `};

  ${withTypography}
`;

export const H2 = styled.h2<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h2.xs};
    font-weight: normal;
    letter-spacing: -0.5px;
    margin: 0;
    padding: 0;

    ${theme.media.md`
      font-size: ${theme.fontSizes.h2.md};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.h2.lg};
    `};
  `};

  ${withTypography}
`;

export const H3 = styled.h3<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h3.xs};
    font-weight: normal;
    letter-spacing: normal;
    margin: 0;
    padding: 0;

    ${theme.media.md`
      font-size: ${theme.fontSizes.h3.md};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.h3.lg};
    `};
  `};

  ${withTypography}
`;

export const H4 = styled.h4<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h4.xs};
    font-weight: normal;
    letter-spacing: 0.3px;
    margin: 0;
    padding: 0;

    ${theme.media.md`
      font-size: ${theme.fontSizes.h4.md};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.h4.lg};
    `};
  `};

  ${withTypography}
`;

export const H5 = styled.h5<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h5.xs};
    font-weight: normal;
    letter-spacing: normal;
    margin: 0;
    padding: 0;

    ${theme.media.md`
      font-size: ${theme.fontSizes.h5.md};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.h5.lg};
    `};
  `};

  ${withTypography}
`;

export const H6 = styled.h6<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.h6.xs};
    font-weight: normal;
    letter-spacing: 0.2px;
    margin: 0;
    padding: 0;

    ${theme.media.md`
      font-size: ${theme.fontSizes.h6.md};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.h6.lg};
    `};
  `};

  ${withTypography}
`;

export const Subtitle = styled.span<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.subtitle1};
    font-weight: normal;
    letter-spacing: 0.2px;
    line-height: 1.5;
    margin: 0;
    padding: 0;

    ${theme.media.md`
      font-size: ${theme.fontSizes.subtitle1};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.subtitle1};
    `};
  `};

  ${withTypography}
`;

export const Subtitle2 = styled.span<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.subtitle2};
    font-weight: normal;
    letter-spacing: 0.1px;
    line-height: 1.71;
    margin: 0;
    padding: 0;

    ${theme.media.md`
      font-size: ${theme.fontSizes.subtitle2};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.subtitle2};
    `};
  `};

  ${withTypography}
`;

export const Body = styled.p<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.body1};
    font-weight: normal;
    letter-spacing: 0.4px;
    line-height: 1.75;
    margin: 0;
    padding: 0;

    ${theme.media.md`
      font-size: ${theme.fontSizes.body1};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.body1};
    `};
  `};

  ${withTypography}
`;

export const Body2 = styled.p<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.body2};
    font-weight: normal;
    letter-spacing: 0.3px;
    line-height: 1.43;
    margin: 0;
    padding: 0;

    ${theme.media.md`
      font-size: ${theme.fontSizes.body2};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.body2};
    `};
  `};

  ${withTypography}
`;

export const Overline = styled.span<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.overline};
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    line-height: 1.6;
    margin: 0;
    padding: 0;

    ${theme.media.md`
      font-size: ${theme.fontSizes.overline};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.overline};
    `};
  `};

  ${withTypography}
`;

export const Caption = styled.span<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.caption};
    font-weight: normal;
    letter-spacing: 0.3px;
    line-height: 1.6;
    margin: 0;
    padding: 0;

    ${theme.media.md`
      font-size: ${theme.fontSizes.caption};
    `};

    ${theme.media.lg`
      font-size: ${theme.fontSizes.caption};
    `};
  `};

  ${withTypography}
`;

export const FormGroupLabel = styled.span<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.formGroupLabel};
    font-weight: bold;
    letter-spacing: 0.1px;
    margin-bottom: ${theme.ruler[2]}px;
    display: block;
  `}

  ${withTypography}
`;
