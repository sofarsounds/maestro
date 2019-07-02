import styled, { css } from '../../lib/styledComponents';

export default styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.dimensions.navbarHeight.xs};
    background: #000;
    color: ${theme.colours.whiteDenim};
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;

    ${theme.media.md`
      height: ${theme.dimensions.navbarHeight.md};
    `}

    ${theme.media.lg`
      height: ${theme.dimensions.navbarHeight.lg};
    `}
  `}
`;
