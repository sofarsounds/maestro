import styled, { css } from '../../lib/styledComponents';

interface WrapperProps {
  open: boolean;
}
export default styled.div<WrapperProps>`
  ${({ open, theme }) => css`
    display: none;

    ${open &&
      css`
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-end;
        position: fixed;
        top: ${theme.dimensions.navbarHeight.xs};
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        border-top: 1px solid ${theme.colours.paintItBlack};
        padding: 0 15px;
      `}

    ${theme.media.md`
      flex: 1;
      display: flex;
    `}
  `}
`;

