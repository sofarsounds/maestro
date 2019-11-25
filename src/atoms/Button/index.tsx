import styled, { keyframes, css } from 'styled-components';
import { makeOpaque } from '../../lib/color';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface ButtonProps {
  loading?: boolean | false;
  small?: boolean;
  block?: boolean;
}

export const buttonTextStyle = ({ theme }: any) => css`
  font-size: ${theme.fontSizes.button};
  font-weight: 600;
  letter-spacing: 0.8px;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
  transition: ${theme.utils.transition()};
`;

export const BaseButton = styled.button<ButtonProps>`
  ${({ theme, loading, small, block }) => css`
    border-radius: ${theme.borderRadius.button};

    cursor: pointer;
    font-size: ${theme.fontSizes.button};
    font-weight: 600;
    height: ${theme.dimensions.button.default.height};
    padding: ${theme.dimensions.button.default.padding};
    letter-spacing: 0.8px;
    outline: none;
    text-decoration: none;
    text-transform: uppercase;

    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
    }

    // icon tag
    i {
      margin-right: ${theme.ruler[2]}px;
    }

    ${loading &&
      css`
        pointer-events: none;
        cursor: disabled;

        i {
          opacity: 0;
        }
      `}

    ${small &&
      css`
        height: ${theme.dimensions.button.small.height};
        padding: ${theme.dimensions.button.small.padding};
      `}

    ${block &&
      css`
        display: block;
        width: 100%;
      `}

  `}
`;

export const PrimaryButton = styled(BaseButton)`
  ${({ theme, loading }) => css`
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.whiteDenim};

    &:hover {
      background-color: ${theme.colors.green900};
    }

    &:focus {
      background-color: ${theme.colors.green700};
    }

    &:disabled {
      background-color: ${theme.colors.blueSmoke};
      border-color: ${theme.colors.blueSmoke};
    }

    i:before {
      color: ${theme.colors.whiteDenim};
    }

    ${loading &&
      css`
        color: transparent !important;
        background-color: ${theme.colors.blueSmoke};
        border-color: ${theme.colors.blueSmoke};
        position: relative;

        :after {
          animation: ${rotate360} 0.5s linear infinite;
          border: 0.1rem solid ${theme.colors.whiteDenim};
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

interface OutlineButtonProps {
  color?: 'primary' | 'black' | 'white';
}

export const OutlineButton = styled(PrimaryButton)<OutlineButtonProps>`
  ${({ theme, loading, color }) => css`
    background: transparent;
    color: ${theme.colors.primary};

    i:before {
      color: ${theme.colors.primary};
    }

    &:hover {
      border-color: ${theme.colors.green900};
      color: ${theme.colors.green900};
      background-color: transparent;

      i:before {
        color: ${theme.colors.green900};
      }
    }

    &:focus {
      background-color: ${makeOpaque(theme.colors.green600, 0.1)};
    }

    &:disabled {
      background-color: ${theme.colors.whiteDenim};
      color: ${theme.colors.blueSmoke};

      i:before {
        color: ${theme.colors.blueSmoke};
      }
    }

    ${color === 'black' &&
      css`
        border-color: ${theme.colors.blackBetty};
        color: ${theme.colors.backToBlack};

        i:before {
          color: ${theme.colors.backToBlack};
        }

        &:hover {
          border-color: ${theme.colors.backToBlack};
          color: ${theme.colors.backToBlack};

          i:before {
            color: ${theme.colors.backToBlack};
          }
        }

        &:focus {
          background-color: ${theme.colors.macyGrey};
        }
      `}

    ${color === 'white' &&
      css`
        border-color: ${theme.colors.whiteDenim};
        color: ${theme.colors.whiteDenim};
        background-color: transparent;

        i:before {
          color: ${theme.colors.whiteDenim};
        }

        &:hover {
          border-color: ${theme.colors.whiteDenim};
          color: ${theme.colors.whiteDenim};
          background-color: transparent;

          i:before {
            color: ${theme.colors.whiteDenim};
          }
        }

        &:focus {
          background-color: ${theme.colors.backToBlack};
        }
      `}

    ${loading &&
      css`
        :after {
          border-color: ${theme.colors.blueSmoke};
          border-right-color: transparent;
          border-top-color: transparent;
        }
      `}
  `}
`;

export const LinkButton = styled(OutlineButton)`
  ${({ theme }) => css`
    background: ${theme.colors.whiteDenim};
    border: none;
    color: ${theme.colors.primary};

    i:before {
      color: ${theme.colors.primary};
    }

    &:hover {
      color: ${theme.colors.green900};

      i:before {
        color: ${theme.colors.green900};
      }
    }

    &:focus {
      background-color: ${makeOpaque(theme.colors.green600, 0.1)};
    }

    &:disabled {
      background-color: ${theme.colors.whiteDenim};
    }
  `};
`;
