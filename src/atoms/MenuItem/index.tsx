import React from 'react';
import styled, { css } from '../../lib/styledComponents';

interface Props {
  children: string | React.ReactNode;
  disabled?: boolean;
  onClick?: () => any;
  'data-qaid'?: string;
}

const OptionStyled = styled.li<Props>`
  ${({ theme, disabled }) => css`
    margin-top: 0px;
    list-style: none;
    padding: ${theme.ruler[2]}px ${theme.ruler[4]}px;
    font-size: ${theme.fontSizes.body2};
    letter-spacing: 0.25px;
    color: ${theme.colors.backToBlack};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.silverSprings};
    }

    &:focus {
      background-color: ${theme.colors.silverSprings};
    }

    ${disabled &&
      css`
        cursor: initial;

        &:hover,
        &:focus {
          background-color: ${theme.colors.whiteDenim};
        }
      `}
  `}
`;

const Option: React.SFC<Props> = ({
  children,
  disabled,
  onClick,
  'data-qaid': qaId
}) => (
  <OptionStyled onClick={onClick} data-qaid={qaId} disabled={disabled}>
    {children}
  </OptionStyled>
);

export default Option;
