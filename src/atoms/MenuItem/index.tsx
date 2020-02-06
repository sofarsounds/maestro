import React from 'react';
import styled, { css } from '../../lib/styledComponents';

interface Props {
  children: string | React.ReactNode;
  onClick?: () => any;
  'data-qaid'?: string;
}

const OptionStyled = styled.li<Props>`
  ${({ theme }) => css`
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
  `}
`;

const Option: React.SFC<Props> = ({ children, onClick, 'data-qaid': qaId }) => (
  <OptionStyled onClick={onClick} data-qaid={qaId}>
    {children}
  </OptionStyled>
);

export default Option;
