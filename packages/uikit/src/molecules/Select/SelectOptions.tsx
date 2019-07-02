
import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { inputBaseStyle, InputProps } from '../../atoms/FormElements/Base';

import Icon from '../../atoms/Icon';

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
  onClick: () => void;
}

interface ButtonProps {
  isOpen?: boolean;
  children?: any;
}

const Button = styled.button<ButtonProps>`
  ${inputBaseStyle};
  flex-basis: 50px;
  border-radius: 0px 2px 2px 0px;

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

const SelectInput: React.SFC<Props> = ({ isOpen, placeholder, onClick }) => (
  <InputWrapper>
    <InputStyle isOpen={isOpen} placeholder={placeholder} />
    <Button onClick={e => onClick()} isOpen={isOpen}>
      <Icon name={isOpen ? 'caretDown' : 'check'} />
    </Button>
  </InputWrapper>
);

export default SelectInput;
