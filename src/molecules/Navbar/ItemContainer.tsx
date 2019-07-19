import styled, { css } from '../../lib/styledComponents';

interface ItemContainerProps {
  align?: 'left' | 'right';
}
export default styled.div<ItemContainerProps>`
  ${({ theme, align = 'left' }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colours.whiteDenim};
    ${theme.media.md`
      flex-direction: row;
      align-items: center;
      flex: 1;

      ${align === 'right' &&
        css`
          flex: auto;
          justify-content: flex-end;
        `}
    `}
  `}
`;
