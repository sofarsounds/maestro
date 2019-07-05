import { css } from '../lib/styledComponents';

interface TypographyProps {
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
}: TypographyProps) => css`
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
