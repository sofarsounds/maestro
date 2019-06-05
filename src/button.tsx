import styled, { keyframes, css } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface ButtonProps {
  color?: 'primary' | 'secondary';
  loading?: boolean;
}

export default styled.button<ButtonProps>`
  ${({ theme, disabled, loading, color = 'primary' }) => css`
    border: none;
    height: 50px;
    padding: 0 20px;
    outline: none;
    cursor: pointer;
    border-radius: ${theme.utils.borderRadius};
    transition: ${theme.utils.transition()};

    ${color === 'primary' &&
      css`
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        font-size: 14px;

        &:hover,
        &:focus {
          background: ${theme.utils.darken(theme.colors.primary)};
        }

        &:active {
          background: ${theme.utils.darken(theme.colors.primary, 2)};
        }
      `};

    ${disabled &&
      css`
        opacity: 0.5;
        pointer-events: none;
        cursor: disabled;
      `} ${loading &&
      css`
        color: transparent !important;
        opacity: 0.75;
        pointer-events: none;
        cursor: disabled;
        position: relative;
        :after {
          animation: ${rotate360} 0.5s linear infinite;
          border: 0.1rem solid #fff;
          border-radius: 50%;
          border-right-color: transparent;
          border-top-color: transparent;
          content: '';
          display: block;
          height: 0.8rem;
          left: 50%;
          margin-left: -0.4rem;
          margin-top: -0.4rem;
          position: absolute;
          top: 50%;
          width: 0.8rem;
          z-index: 1;
        }
      `};
  `};
`;
