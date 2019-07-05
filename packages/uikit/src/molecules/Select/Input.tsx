import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { withShadow } from '../../util';
import { inputBaseStyle, InputProps } from '../../atoms/FormElements/Base';

import Icon from '../../atoms/Icon';

interface SelectInputProps {
  isOpen?: boolean;
  depth: any;
}

interface InputWrapper {
  children?: any;
  isOpen?: boolean;
}

interface Props {
  placeholder?: string;
  isOpen?: boolean;
  onClick: () => void;
  innerRef?: React.RefObject<any>;
  value?: any;
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
  ${({ theme, isOpen = false }) => css`
    ${inputBaseStyle};
    border-right: 0px;

    &::placeholder {
      color: ${theme.colours.blueSmoke};
    }

    border-radius: 2px 0px 0px 2px;
    ${isOpen &&
      css`
        ${withShadow}
      `}
  `}
`;

const Input: React.SFC<Props> = ({
  isOpen,
  placeholder,
  onClick,
  innerRef,
  value
}) => {
  return (
    <InputWrapper ref={innerRef}>
      <InputStyle
        value={value}
        depth={3}
        isOpen={isOpen}
        placeholder={placeholder}
      />
      <Button onClick={e => onClick()} isOpen={isOpen}>
        <Icon name={isOpen ? 'caretDown' : 'check'} />
      </Button>
    </InputWrapper>
  );
};

export default Input;
