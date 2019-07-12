import { css } from '../lib/styledComponents';

export interface WithTypographyProps {
  colour?: string;
  align?: 'center' | 'left' | 'right';
  underline?: boolean;
  lineHeight?: number;
  fontWeight?: 'lighter' | 'regular' | 'bold';
}

export default ({
  colour,
  align,
  underline,
  lineHeight,
  fontWeight
}: WithTypographyProps) => css`
  ${colour &&
    css`
      color: ${colour};

      * {
        color: ${colour};
      }
    `};

  ${align &&
    css`
      text-align: ${align || 'none'};
    `};

  ${underline &&
    css`
      text-decoration: underline;
    `};

  ${lineHeight &&
    css`
      line-height: ${lineHeight};
    `};

  ${fontWeight &&
    css`
      font-weight: ${fontWeight || 'regular'};
    `};
`;
