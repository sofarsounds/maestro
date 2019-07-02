import styled, { css } from '../../lib/styledComponents';

interface BadgeProps {
  children: any;
  colour?: 'primary';
  clickable?: boolean;
  disabled?: boolean;
}

const Badge = styled.div<BadgeProps>`
  ${({ theme, colour, clickable }) => css`
    width: 36px;
    height: 36px;
    font-size: ${theme.fontSizes.body2};
    transition: ${theme.utils.transition()};
    border: none;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    user-select: none;

    ${clickable &&
      css`
        cursor: pointer;

        &:hover {
          background-color: rgba(17, 17, 17, 0.1);
        }
      `}

    ${colour === 'primary' &&
      css`
        background-color: ${theme.colours.primary};
        color: ${theme.colours.whiteDenim};
        font-weight: 600;

        ${clickable &&
          css`
            &:hover {
              background-color: ${theme.colours.green800};
            }
          `}
      `}
  `}
`;

export default Badge;
