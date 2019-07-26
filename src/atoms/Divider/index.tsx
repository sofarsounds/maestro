import styled, { css } from 'styled-components';

interface DividerProps {
  space?: number;
}

export default styled.hr<DividerProps>`
  ${({ theme, space }) => css`
    border: none;
    border-top: 1px solid ${theme.colors.macyGrey};
    width: 100%;
    margin: ${theme.ruler[space || 11]}px 0;
  `}
`;
