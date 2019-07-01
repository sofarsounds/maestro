import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { inputBaseStyle, InputProps } from './Base';

import Icon from '../Icon';

interface SelectInputProps {
  isOpen?: boolean;
}

interface InputWrapper {
  children?: any;
  isOpen?: boolean;
}

interface Props {
  placeholder?: string;
  isOpen?: boolean;
}

interface ButtonProps {
  isOpen?: boolean;
  children?: any;
}

const Button = styled.button<ButtonProps>`
  flex-basis: 50px;
  ${inputBaseStyle};

  ${({ isOpen }) => isOpen && css``}
`;

const InputWrapper = styled.div<InputWrapper>`
  display: flex;
  flex: center;
`;

const InputStyle = styled.input<InputProps & SelectInputProps>`
  ${({ isOpen = false }) => css`
    ${inputBaseStyle};
    border-right: 0px;
    border-radius: 2px 0px 0px 2px;
    ${isOpen && css``}
  `}
`;

const Input: React.SFC<Props> = ({ isOpen, placeholder }) => (
  <InputWrapper>
    <InputStyle isOpen={isOpen} placeholder={placeholder} />
    <Button isOpen={isOpen}>
      <Icon name={isOpen ? 'caretDown' : 'check'} />
    </Button>
  </InputWrapper>
);

export default Input;
