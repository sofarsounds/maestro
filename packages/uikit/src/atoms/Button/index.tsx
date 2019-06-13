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
  loading?: boolean;
}

export const BaseButton = styled.button<ButtonProps>`
  ${({ theme, loading }) => css`
    border-radius: ${theme.borderRadius.button};

    cursor: pointer;
    font-size: ${theme.fontSizes.button};
    font-weight: 600;
    height: 44px;
    letter-spacing: 0.8px;
    outline: none;
    padding: 0 25px;
    text-decoration: none;
    text-transform: uppercase;
    transition: ${theme.utils.transition()};

    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
    }

    ${loading &&
      css`
        pointer-events: none;
        cursor: disabled;
      `}
  `}
`;

export const PrimaryButton = styled(BaseButton)`
  ${({ theme, loading }) => css`
    background: ${theme.colours.primary};
    border: 1px solid ${theme.colours.primary};
    color: ${theme.colours.whiteDenim};

    &:hover {
      background-color: ${theme.colours.green900};
    }

    &:focus {
      background-color: ${theme.colours.green700};
    }

    &:disabled {
      background-color: ${theme.colours.blueSmoke};
      border-color: ${theme.colours.blueSmoke};
    }

    ${loading &&
      css`
        color: transparent !important;
        background-color: ${theme.colours.blueSmoke};
        border-color: ${theme.colours.blueSmoke};
        position: relative;

        :after {
          animation: ${rotate360} 0.5s linear infinite;
          border: 0.1rem solid ${theme.colours.whiteDenim};
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
  `}
`;

export const SecondaryButton = styled(PrimaryButton)`
  ${({ theme, loading }) => css`
    background: ${theme.colours.whiteDenim};
    color: ${theme.colours.primary};

    &:hover {
      border-color: ${theme.colours.green900};
      color: ${theme.colours.green900};
      background-color: ${theme.colours.whiteDenim};
    }

    &:focus {
      background-color: ${theme.colours.green50};
    }

    &:disabled {
      background-color: ${theme.colours.whiteDenim};
      color: ${theme.colours.blueSmoke};
    }

    ${loading &&
      css`
        :after {
          border-color: ${theme.colours.blueSmoke};
          border-right-color: transparent;
          border-top-color: transparent;
        }
      `}
  `}
`;

export const TertiaryButton = styled(SecondaryButton)`
  ${({ theme, loading }) => css`
    background: ${theme.colours.whiteDenim};
    border-color: ${theme.colours.backToBlack};
    color: ${theme.colours.backToBlack};

    &:hover {
      border-color: ${theme.colours.black};
      color: ${theme.colours.black};
      background-color: ${theme.colours.whiteDenim};
    }

    &:focus {
      background-color: ${theme.colours.macyGrey};
    }

    ${loading &&
      css`
        border-color: ${theme.colours.blueSmoke};

        :after {
          border-color: ${theme.colours.blueSmoke};
          border-right-color: transparent;
          border-top-color: transparent;
        }
      `}
  `}
`;

export const LinkButton = styled(SecondaryButton)`
  ${({ theme }) => css`
    background: ${theme.colours.whiteDenim};
    border-color: ${theme.colours.whiteDenim};
    color: ${theme.colours.primary};

    &:hover {
      color: ${theme.colours.green900};
      border-color: ${theme.colours.whiteDenim};
    }

    &:focus {
      background-color: ${theme.colours.green50};
      border-color: ${theme.colours.green50};
    }

    &:disabled {
      background-color: ${theme.colours.whiteDenim};
      border-color: ${theme.colours.whiteDenim};
    }
  `};
`;
