import styled, { css } from 'styled-components';

/**
 * TODO (but not relevant for now)
 * - Auto-stretch columns to fit when no width is given
 */

interface ColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
export const Col = styled.div<ColProps>`
  ${({ theme, xs, sm, md, lg, xl }) => css`
    grid-column-end: span ${xs || 12};

    ${sm &&
      theme.media.md`
      grid-column-end: span ${sm};
    `}

    ${md &&
      theme.media.lg`
      grid-column-end: span ${md};
    `}

    ${lg &&
      theme.media.lg`
      grid-column-end: span ${lg};
    `}

    ${xl &&
      theme.media.xl`
      grid-column-end: span ${xl};
    `}
  `}
`;

// Grid
interface GridProps {
  cols?: number;
  gap?: string;
  colGap?: string;
  rowGap?: string;
}
export default styled.div<GridProps>`
  ${({ cols, gap, colGap, rowGap }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${cols || 12}, 1fr);

    grid-gap: ${gap || '20px'};

    ${colGap &&
      css`
        grid-column-gap: ${colGap};
      `};

    ${rowGap &&
      css`
        grid-row-gap: ${rowGap};
      `};
  `}
`;