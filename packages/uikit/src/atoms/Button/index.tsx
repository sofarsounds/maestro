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
  loading?: boolean | false;
  small?: boolean;
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
  ${({ theme, loading, small }) => css`
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

    ${loading &&
      css`
        pointer-events: none;
        cursor: disabled;
      `}

    ${small &&
      css`
        height: ${theme.dimensions.button.small.height};
        padding: ${theme.dimensions.button.small.padding};
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

interface OutlineButtonProps {
  colour?: 'primary' | 'black' | 'white';
}

export const OutlineButton = styled(PrimaryButton)<OutlineButtonProps>`
  ${({ theme, loading, colour }) => css`
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

    ${colour === 'black' &&
      css`
        border-color: ${theme.colours.blackBetty};
        color: ${theme.colours.backToBlack};

        &:hover {
          border-color: ${theme.colours.backToBlack};
          color: ${theme.colours.backToBlack};
        }

        &:focus {
          background-color: ${theme.colours.macyGrey};
        }
      `}

    ${colour === 'white' &&
      css`
        border-color: ${theme.colours.whiteDenim};
        color: ${theme.colours.whiteDenim};
        background-color: transparent;

        &:hover {
          border-color: ${theme.colours.whiteDenim};
          color: ${theme.colours.whiteDenim};
          background-color: transparent;
        }

        &:focus {
          background-color: ${theme.colours.macyGrey};
        }
      `}

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

export const LinkButton = styled(OutlineButton)`
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
