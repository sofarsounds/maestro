import styled, { css } from '../../lib/styledComponents';
import { WithTypographyProps, withTypography } from '../../util';

import {
  withTitleStyle,
  withH1Style,
  withH2Style,
  withH3Style,
  withH4Style,
  withH5Style,
  withH6Style
} from './config';

interface TypographyProps extends WithTypographyProps {
  children?: any;
  spaceAfter?: number;
}

export const Title = styled.h1<TypographyProps>`
  ${withTitleStyle}
  ${withTypography}
`;

export const H1 = styled.h1<TypographyProps>`
  ${withH1Style}
  ${withTypography}
`;

export const H2 = styled.h2<TypographyProps>`
  ${withH2Style}
  ${withTypography}
`;

export const H3 = styled.h3<TypographyProps>`
  ${withH3Style}
  ${withTypography}
`;

export const H4 = styled.h4<TypographyProps>`
  ${withH4Style}
  ${withTypography}
`;

export const H5 = styled.h5<TypographyProps>`
  ${withH5Style}
  ${withTypography}
`;

export const H6 = styled.h6<TypographyProps>`
  ${withH6Style}
  ${withTypography}
`;

export const Body = styled.p<TypographyProps>`
  ${({ theme, spaceAfter }) => css`
    font-size: ${theme.fontSizes.body1};
    font-weight: normal;
    letter-spacing: 0.4px;
    line-height: 1.75;
    margin: 0;
    padding: 0;
    margin-bottom: ${spaceAfter ? theme.ruler[spaceAfter] : 0}px;
  `};

  ${withTypography}
`;

export const Body2 = styled.p<TypographyProps>`
  ${({ theme, spaceAfter }) => css`
    font-size: ${theme.fontSizes.body2};
    font-weight: normal;
    letter-spacing: 0.3px;
    line-height: 1.43;
    margin: 0;
    padding: 0;
    margin-bottom: ${spaceAfter ? theme.ruler[spaceAfter] : 0}px;
  `};

  ${withTypography}
`;

export const Overline = styled.span<TypographyProps>`
  ${({ theme, spaceAfter }) => css`
    font-size: ${theme.fontSizes.overline};
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    margin-bottom: ${spaceAfter ? theme.ruler[spaceAfter] : 0}px;
    display: inline-block;
  `};

  ${withTypography}
`;

export const Anchor1 = styled.span<TypographyProps>`
  ${({ theme, spaceAfter }) => css`
    font-size: ${theme.fontSizes.body1};
    font-weight: 600;
    color: ${theme.colors.primary};
    margin-bottom: ${spaceAfter ? theme.ruler[spaceAfter] : 0}px;
    display: inline-block;
  `};

  ${withTypography}

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Anchor2 = styled.span<TypographyProps>`
  ${({ theme, spaceAfter }) => css`
    font-size: ${theme.fontSizes.body2};
    font-weight: 600;
    color: ${theme.colors.primary};
    margin-bottom: ${spaceAfter ? theme.ruler[spaceAfter] : 0}px;
    display: inline-block;
  `};

  ${withTypography}

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Caption = styled.span<TypographyProps>`
  ${({ theme, spaceAfter }) => css`
    font-size: ${theme.fontSizes.caption};
    font-weight: normal;
    letter-spacing: 0.3px;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    margin-bottom: ${spaceAfter ? theme.ruler[spaceAfter] : 0}px;
    display: inline-block;
  `};

  ${withTypography}
`;

export const FormGroupLabel = styled.span<TypographyProps>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.formGroupLabel};
    font-weight: 600;
    letter-spacing: 0.1px;
    margin-bottom: ${theme.ruler[2]}px;
    display: block;
  `}

  ${withTypography}
`;

export * from './config';
