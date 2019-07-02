import { css } from '../lib/styledComponents';

interface TypographyProps {
  align?: 'center' | 'left' | 'right';
  underline?: boolean;
  lineHeight?: number;
  fontWeight?: 'lighter' | 'regular' | 'bold';
}

export default ({
  align,
  underline,
  lineHeight,
  fontWeight
}: TypographyProps) => css`
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
