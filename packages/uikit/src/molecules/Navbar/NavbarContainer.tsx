import styled, { css } from '../../lib/styledComponents';

interface NavbarContainerProps {
  fixed?: boolean;
}

export default styled.div<NavbarContainerProps>`
  ${({ theme, fixed }) => css`
    width: 100%;
    height: ${theme.dimensions.navbarHeight.xs};
    background: #000;
    color: ${theme.colours.whiteDenim};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${theme.zIndex.navbar};

    ${fixed &&
      css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      `}

    ${theme.media.md`
      height: ${theme.dimensions.navbarHeight.md};
    `}

    ${theme.media.lg`
      height: ${theme.dimensions.navbarHeight.lg};
    `}
  `}
`;
