import React from 'react';
import styled, { css } from '../../lib/styledComponents';

interface Props {
  children?: any;
  value?: any;
  disabled?: boolean;
  error?: boolean;
  onClick: (value: any, title: any) => void;
  'data-qaid'?: string;
}

const OptionStyled = styled.li<Props>`
  ${({ theme }) => css`
    margin-top: 0px;
    list-style: none;
    padding: 10px 24px 10px 24px;
    font-size: ${theme.fontSizes.body2};
    letter-spacing: 0.1px;
    color: ${theme.colors.backToBlack};

    &:hover {
      background-color: ${theme.colors.silverSprings};
      cursor: pointer;
    }

    &:focus {
      background-color: ${theme.colors.silverSprings};
      cursor: pointer;
    }
  `}
`;

const Option: React.SFC<Props> = ({
  value,
  onClick,
  children,
  'data-qaid': qaId
}) => {
  const onChange = () => onClick(value, children);
  return (
    <OptionStyled onClick={onChange} data-qaid={qaId}>
      {children}
    </OptionStyled>
  );
};

export default Option;
