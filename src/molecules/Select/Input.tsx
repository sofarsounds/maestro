import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { withTextfieldStyle, withShadow } from '../../util';
import { InputProps } from '../../typings/input';

import Icon from '../../atoms/Icon';

interface SelectInputProps {
  isOpen?: boolean;
  readonly?: boolean;
}

interface InputWrapper {
  children?: any;
  isOpen?: boolean;
  hasError?: boolean;
}

interface Props {
  placeholder?: string;
  readonly?: boolean;
  isOpen?: boolean;
  toggleSelect: () => void;
  innerRef?: React.RefObject<any>;
  value?: any;
  hasError?: boolean;
  name?: string;
  id?: string;
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
    border-color: ${theme.colors.macyGrey}
    outline: none;
  `}
  }
`;

const InputWrapper = styled.div<InputWrapper>`
  ${({ isOpen }) => css`
    display: flex;
    flex: center;
    ${withTextfieldStyle};
    padding-right: 0px;

    ${isOpen &&
      css`
        cursor: pointer;
        ${withShadow({ depth: 3 })}
      `}
  `}
`;

const InputStyle = styled.input<InputProps & SelectInputProps>`
  ${({ theme, readOnly }) => css`
    border-right: 0px;
    width: 100%;
    border: 0px;
    font-size: ${theme.fontSizes.body2};
    letter-spacing: 0.1px;
    color: ${theme.colors.backToBlack};

    &:hover {
      outline: none;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${theme.colors.blueSmoke};
    }

    ${readOnly &&
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
  readonly,
  hasError,
  name,
  id
}) => {
  return (
    <InputWrapper
      id={id}
      hasError={hasError}
      onClick={toggleSelect}
      isOpen={isOpen}
      ref={innerRef}
    >
      <InputStyle
        value={value}
        readOnly={readonly}
        isOpen={isOpen}
        placeholder={placeholder}
        name={name}
      />
      <Button isOpen={isOpen}>
        <Icon name={isOpen ? 'caretUp' : 'caretDown'} />
      </Button>
    </InputWrapper>
  );
};

export default Input;
