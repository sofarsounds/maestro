import styled, { css } from 'styled-components';

interface DividerProps {
  space?: number;
  color?: string;
}

export default styled.hr<DividerProps>`
  ${({ theme, space, color }) => css`
    border: none;
    border-top: 1px solid ${color || theme.colors.silverSprings};
    width: 100%;
    margin: ${theme.ruler[space || 11]}px 0;
  `}
`;
