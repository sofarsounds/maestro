import styled, { css } from 'styled-components';
import { Colors } from '../../typings/theme';

interface DividerProps {
  space?: number;
  color?: Colors;
}

export default styled.hr<DividerProps>`
  ${({ theme, space, color }) => css`
    border: none;
    border-top: 1px solid ${theme.colors[color || 'silverSprings']};
    width: 100%;
    margin: ${theme.ruler[space || 11]}px 0;
  `}
`;
