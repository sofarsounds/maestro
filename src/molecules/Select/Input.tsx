import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { withShadow } from '../../util';
import inputBaseStyle, { InputProps } from '../../atoms/Textfield/baseStyle';

import Icon from '../../atoms/Icon';

interface SelectInputProps {
  isOpen?: boolean;
  readonly?: boolean;
}

interface InputWrapper {
  children?: any;
  isOpen?: boolean;
}

interface Props {
  placeholder?: string;
  readonly?: boolean;
  isOpen?: boolean;
  toggleSelect: () => void;
  innerRef?: React.RefObject<any>;
  value?: any;
}

interface ButtonProps {
  isOpen?: boolean;
  children?: any;
}

const Button = styled.button<ButtonProps>`
${({ theme }) => css`
  flex-basis: 50px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border-color: ${theme.colours.macyGrey}
    outline: none;
  `}
  }
`;

const InputWrapper = styled.div<InputWrapper>`
  ${({ isOpen }) => css`
    display: flex;
    flex: center;
    ${inputBaseStyle};
    padding-right: 0px;

    ${isOpen &&
      css`
        cursor: pointer;
        ${withShadow({ depth: 3 })}
      `}
  `}
`;

const InputStyle = styled.input<InputProps & SelectInputProps>`
  ${({ theme, readonly }) => css`
    border-right: 0px;
    width: 100%;
    border: 0px;
    font-size: ${theme.fontSizes.body2};
    letter-spacing: 0.1px;
    color: ${theme.colours.backToBlack};

    &:hover {
      outline: none;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${theme.colours.blueSmoke};
    }

    ${readonly &&
      css`
        cursor: pointer;
      `}
  `}
`;

const Input: React.SFC<Props> = ({
  isOpen,
  placeholder,
  toggleSelect,
  innerRef,
  value,
  readonly
}) => {
  return (
    <InputWrapper onClick={() => toggleSelect()} isOpen={isOpen} ref={innerRef}>
      <InputStyle
        value={value}
        readOnly={readonly}
        isOpen={isOpen}
        placeholder={placeholder}
      />
      <Button isOpen={isOpen}>
        <Icon name={isOpen ? 'caretUp' : 'caretDown'} />
      </Button>
    </InputWrapper>
  );
};

export default Input;
