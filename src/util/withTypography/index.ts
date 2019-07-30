import { css } from '../../lib/styledComponents';

export interface WithTypographyProps {
  color?: string;
  align?: 'center' | 'left' | 'right';
  underline?: boolean;
  lineHeight?: number;
  fontWeight?: 'lighter' | 'regular' | 'bold';
}

export default ({
  color,
  align,
  underline,
  lineHeight,
  fontWeight
}: WithTypographyProps) => css`
  ${color &&
    css`
      color: ${color};

      * {
        color: ${color};
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
