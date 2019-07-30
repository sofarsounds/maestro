import { css } from '../../lib/styledComponents';

interface ShadowProps {
  depth: 1 | 2 | 3 | 4 | 5;
}

export default ({ depth }: ShadowProps) => css`
  ${depth <= 1 &&
    css`
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    `}

  ${depth === 2 &&
    css`
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16),
        0 3px 6px 0 rgba(0, 0, 0, 0.23);
    `}

  ${depth === 3 &&
    css`
      box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    `}

  ${depth === 4 &&
    css`
      box-shadow: 0 14px 28px 0 rgba(0, 0, 0, 0.25);
    `}

  ${depth >= 5 &&
    css`
      box-shadow: 0 19px 38px 0 rgba(0, 0, 0, 0.3),
        0 15px 12px 0 rgba(0, 0, 0, 0.22);
    `}
`;
