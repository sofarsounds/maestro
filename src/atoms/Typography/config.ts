import { css } from '../../lib/styledComponents';
import theme from '../../theme';

const getSpaceAfter = (defaultSpace: number, spaceAfter?: number) => {
  return spaceAfter !== undefined && spaceAfter >= 0
    ? spaceAfter
    : defaultSpace;
};

export const withTitleStyle = ({ spaceAfter }: any) => css`
  font-size: ${theme.fontSizes.title.xs};
  font-weight: 800;
  letter-spacing: -2px;
  line-height: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${theme.ruler[getSpaceAfter(10, spaceAfter)]}px;

  ${theme.media.md`
      font-size: ${theme.fontSizes.title.md};
    `};

  ${theme.media.lg`
      font-size: ${theme.fontSizes.title.lg};
    `};
`;

export const withH1Style = ({ spaceAfter }: any) => css`
  font-size: ${theme.fontSizes.h1.xs};
  font-weight: 600;
  letter-spacing: -1.5px;
  margin: 0;
  padding: 0;
  margin-bottom: ${theme.ruler[getSpaceAfter(10, spaceAfter)]}px;

  ${theme.media.md`
      font-size: ${theme.fontSizes.h1.md};
    `};

  ${theme.media.lg`
      font-size: ${theme.fontSizes.h1.lg};
    `};
`;

export const withH2Style = ({ spaceAfter }: any) => css`
  font-size: ${theme.fontSizes.h2.xs};
  font-weight: 600;
  letter-spacing: -0.5px;
  margin: 0;
  padding: 0;
  margin-bottom: ${theme.ruler[getSpaceAfter(8, spaceAfter)]}px;

  ${theme.media.md`
      font-size: ${theme.fontSizes.h2.md};
    `};

  ${theme.media.lg`
      font-size: ${theme.fontSizes.h2.lg};
    `};
`;

export const withH3Style = ({ spaceAfter }: any) => css`
  font-size: ${theme.fontSizes.h3.xs};
  font-weight: 600;
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${theme.ruler[getSpaceAfter(8, spaceAfter)]}px;

  ${theme.media.md`
      font-size: ${theme.fontSizes.h3.md};
    `};

  ${theme.media.lg`
      font-size: ${theme.fontSizes.h3.lg};
    `};
`;

export const withH4Style = ({ spaceAfter }: any) => css`
  font-size: ${theme.fontSizes.h4.xs};
  font-weight: 600;
  letter-spacing: 0.3px;
  margin: 0;
  padding: 0;
  margin-bottom: ${theme.ruler[getSpaceAfter(6, spaceAfter)]}px;

  ${theme.media.md`
      font-size: ${theme.fontSizes.h4.md};
    `};

  ${theme.media.lg`
      font-size: ${theme.fontSizes.h4.lg};
    `};
`;

export const withH5Style = ({ spaceAfter }: any) => css`
  font-size: ${theme.fontSizes.h5.xs};
  font-weight: 600;
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  margin-bottom: ${theme.ruler[getSpaceAfter(4, spaceAfter)]}px;

  ${theme.media.md`
      font-size: ${theme.fontSizes.h5.md};
    `};

  ${theme.media.lg`
      font-size: ${theme.fontSizes.h5.lg};
    `};
`;

export const withH6Style = ({ spaceAfter }: any) => css`
  font-size: ${theme.fontSizes.h6.xs};
  font-weight: 600;
  letter-spacing: 0.2px;
  margin: 0;
  padding: 0;
  margin-bottom: ${theme.ruler[getSpaceAfter(4, spaceAfter)]}px;

  ${theme.media.md`
      font-size: ${theme.fontSizes.h6.md};
    `};

  ${theme.media.lg`
      font-size: ${theme.fontSizes.h6.lg};
    `};
`;
