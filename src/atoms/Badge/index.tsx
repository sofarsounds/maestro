import styled, { css } from '../../lib/styledComponents';

interface BadgeProps {
  children: any;
  color?: 'primary';
  clickable?: boolean;
  disabled?: boolean;
}

const Badge = styled.div<BadgeProps>`
  ${({ theme, color, disabled, clickable }) => css`
    width: 36px;
    height: 36px;
    margin: 0;
    padding: 0;
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

    ${color === 'primary' &&
      css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.whiteDenim};
        font-weight: 600;

        ${clickable &&
          css`
            &:hover {
              background-color: ${theme.colors.green800};
            }
          `}
      `}

    ${disabled &&
      css`
        user-select: none;
        cursor: not-allowed;

        &:hover {
          background-color: transparent;
        }
      `}
  `}
`;

export default Badge;
