import styled, { css } from '../../lib/styledComponents';

export default styled.a`
  ${({ theme }) => css`
    color: ${theme.colours.whiteDenim};
    font-size: ${theme.fontSizes.body2};
    letter-spacing: 0.1px;
    display: block;
    padding: 12px 0px;
    width: 100%;
    text-decoration: none;
    white-space: nowrap;

    ${theme.media.md`
      width: auto;
      padding: 10px 6px;
    `}
  `}
`;
