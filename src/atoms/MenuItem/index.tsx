import React from 'react';
import styled, { css } from '../../lib/styledComponents';

interface Props {
  children: string | React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => any;
  invertColor?: boolean;
  'data-qaid'?: string;
}

export default styled.li<Props>`
  ${({ theme, active, disabled, invertColor }) => css`
    margin-top: 0px;
    list-style: none;
    padding: ${theme.ruler[2]}px ${theme.ruler[4]}px;
    font-size: ${theme.fontSizes.body2};
    letter-spacing: 0.25px;
    cursor: pointer;

    color: ${invertColor ? theme.colors.whiteDenim : theme.colors.backToBlack};

    &:hover {
      background-color: ${invertColor
        ? theme.colors.green400
        : theme.colors.silverSprings};
      color: ${invertColor ? theme.colors.backToBlack : 'inherit'};
    }

    &:focus {
      background-color: ${invertColor
        ? theme.colors.green400
        : theme.colors.silverSprings};
      color: ${invertColor ? theme.colors.backToBlack : 'inherit'};
    }

    ${active &&
      css`
        background-color: ${invertColor
          ? theme.colors.green400
          : theme.colors.silverSprings};
        color: ${invertColor ? theme.colors.backToBlack : 'inherit'};
      `}

    ${disabled &&
      css`
        cursor: initial;

        &:hover,
        &:focus {
          background-color: transparent;
        }
      `}
  `}
`;
