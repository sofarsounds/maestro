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
  xsStart?: number;
  smStart?: number;
  mdStart?: number;
  lgStart?: number;
  xlStart?: number;
  rowSpan?: number;
}
export const Col = styled.div<ColProps>`
  ${({
    theme,
    xs,
    sm,
    md,
    lg,
    xl,
    xsStart,
    smStart,
    mdStart,
    lgStart,
    xlStart,
    rowSpan
  }) => css`
    grid-column-end: span ${xs || 12};
    grid-column-start: ${xsStart || 'auto'};
    grid-row: span ${rowSpan || 'auto'};

    ${sm &&
      theme.media.sm`
      grid-column-start: ${smStart || 'auto'};
      grid-column-end: span ${sm};
    `}

    ${md &&
      theme.media.md`
      grid-column-start: ${mdStart || 'auto'};
      grid-column-end: span ${md};
    `}

    ${lg &&
      theme.media.lg`
      grid-column-start: ${lgStart || 'auto'};
      grid-column-end: span ${lg};
    `}

    ${xl &&
      theme.media.xl`
      grid-column-start: ${xlStart || 'auto'};
      grid-column-end: span ${xl};
    `}
  `}
`;

// Grid
interface GridProps {
  cols?: number;
  gap?: string;
}
export default styled.div<GridProps>`
  ${({ cols, gap, theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${cols || 12}, 1fr);
    grid-gap: 15px;

    ${theme.media.sm`
      grid-gap: ${gap || '30px'}
    `}
  `}
`;
