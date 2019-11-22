import styled, { css } from 'styled-components';

type dividerColors = 'grey' | 'black' | 'white';

interface DividerProps {
  space?: number;
  color?: dividerColors;
}

export default styled.hr<DividerProps>`
  ${({ theme, space, color }) => css`
    border: none;
    ${!color &&
      css`
        border-top: 1px solid ${theme.colors.silverSprings};
      `}

    ${color === 'white' &&
      css`
        border-top: 1px solid ${theme.colors.whiteDenim};
      `}
    ${color === 'black' &&
      css`
        border-top: 1px solid ${theme.colors.backToBlack};
      `}
    ${color === 'grey' &&
      css`
        border-top: 1px solid ${theme.colors.macyGrey};
      `}
    width: 100%;
    margin: ${theme.ruler[space || 11]}px 0;
  `}
`;
