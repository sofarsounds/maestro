import styled, { css } from '../../lib/styledComponents';

interface WrapperProps {
  open: boolean;
}
export default styled.div<WrapperProps>`
  ${({ open, theme }) => css`
    display: none;
    z-index: ${theme.zIndex.navbar};

    ${open &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: fixed;
        top: ${theme.dimensions.navbarHeight.xs};
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        border-top: 1px solid ${theme.colors.paintItBlack};
        padding: ${theme.ruler[4]}px;
      `}

    ${theme.media.md`
      flex: 1;
      display: flex;
    `}
  `}
`;
