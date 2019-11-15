import styled, { css } from '../../lib/styledComponents';

export type NavbarPositions = 'absolute' | 'fixed';

interface NavbarContainerProps {
  position?: NavbarPositions;
  transparent?: boolean;
}

export default styled.div<NavbarContainerProps>`
  ${({ theme, position, transparent }) => css`
    width: 100%;
    height: ${theme.dimensions.navbarHeight.xs};
    background: #000;
    color: ${theme.colors.whiteDenim};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${theme.zIndex.navbar};
      ${position === 'absolute' &&
        css`
          position: absolute;
        `}
      ${position === 'fixed' &&
        css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
        `}
      ${transparent &&
        theme.media.md`
        background: transparent;
      `}
      ${theme.media.md`
      height: ${theme.dimensions.navbarHeight.md};
    `} ${theme.media.lg`
      height: ${theme.dimensions.navbarHeight.lg};
    `};
  `}
`;
