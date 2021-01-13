import styled, { css } from '../../lib/styledComponents';

interface Props {
  emphasize?: boolean;
}

export default styled.a<Props>`
  ${({ theme, emphasize }) => css`
    color: ${theme.colors.whiteDenim};
    font-size: ${theme.fontSizes.body2};
    letter-spacing: 0.1px;
    display: block;
    padding: 12px 0px;
    width: 100%;
    text-decoration: none;
    white-space: nowrap;
    text-align: center;

    i::before {
      color: ${theme.colors.whiteDenim};
    }

    ${theme.media.md`
      width: auto;
      padding: 10px ${theme.ruler[3]}px;
    `}

    ${emphasize &&
      css`
        text-align: center;
        border: 1px solid ${theme.colors.whiteDenim};
        border-radius: ${theme.borderRadius.default};
        text-transform: uppercase;
        font-weight: bold;
      `}
  `}
`;
