import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { withTextfieldStyle, withShadow } from '../../util';
import { InputProps } from '../../typings/input';

import Icon from '../../atoms/Icon';

interface SelectInputProps {
  isOpen?: boolean;
  readonly?: boolean;
  invertColor?: boolean;
}

interface Wrapper {
  children?: any;
  isOpen?: boolean;
  hasError?: boolean;
  invertColor?: boolean;
  readOnly?: boolean;
}

interface Props {
  invertColor?: boolean;
  isOpen?: boolean;
  onToggle: () => void;
  innerRef?: React.RefObject<any>;
  hasError?: boolean;
  renderLeftIcon?: React.ReactNode;
  'data-qaid'?: string;

  inputProps: {
    id?: string;
    placeholder?: string;
    readOnly?: boolean;
    name?: string;
    value?: string;
    onChange?: (e: any) => void;
    onClear?: () => void;
  };
}

interface ButtonProps {
  isOpen?: boolean;
  children?: React.ReactNode;
  invertColor?: boolean;
}

const Wrapper = styled.div<Wrapper>`
  ${({ theme, readOnly, invertColor, isOpen }) => css`
    display: flex;
    flex: center;
    align-items: center;
    ${withTextfieldStyle};
    padding-right: ${theme.ruler[2]}px;

    ${readOnly &&
      css`
        cursor: pointer;
      `}

    ${isOpen &&
      css`
        ${withShadow({ depth: 3 })}

        &:hover {
          border-color: ${theme.colors.macyGrey};
        }
      `}

    ${invertColor &&
      css`
        background: transparent;
        border-color: ${theme.colors.whiteDenim};

        &:hover {
          border-color: ${theme.colors.whiteDenim};
        }
      `}
  `}
`;

const IconWrapper = styled.div<{ invertColor?: boolean }>`
  ${({ theme, invertColor }) => css`
    margin-right: ${theme.ruler[2]}px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    i::before {
      color: ${theme.colors[invertColor ? 'whiteDenim' : 'blueSmoke']};
    }
  `}
`;

const StyledInput = styled.input<InputProps & SelectInputProps>`
  ${({ theme, invertColor, readOnly }) => css`
    background: transparent;
    height: 100%;
    width: 100%;
    border: none;
    font-size: ${theme.fontSizes.body2};
    letter-spacing: 0.1px;
    color: ${theme.colors.backToBlack};

    ${readOnly &&
      css`
        cursor: pointer;
      `}

    &:hover, &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${theme.colors.blueSmoke};
    }

    ${invertColor &&
      css`
        color: ${theme.colors.whiteDenim};

        &::placeholder {
          color: ${theme.colors.whiteDenim};
        }
      `}
  `}
`;

const ActionButton = styled.button<ButtonProps>`
  ${({ theme, invertColor }) => css`
    width: 25px;
    height: 25px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
    cursor: pointer;
    border-radius: 100%;

    &:hover {
      background-color: ${theme.colors[
        invertColor ? 'paintItBlack' : 'silverSprings'
      ]};
    }

    &:focus {
      outline: none;
    }

    i::before {
      color: ${theme.colors[invertColor ? 'whiteDenim' : 'blueSmoke']};
    }
  `}
`;

const Input: React.SFC<Props> = ({
  isOpen,
  onToggle,
  inputProps = {},
  innerRef,
  hasError,
  invertColor,
  renderLeftIcon,
  'data-qaid': qaId
}) => (
  <Wrapper
    id={inputProps.id}
    readOnly={inputProps.readOnly}
    hasError={hasError}
    onClick={onToggle}
    isOpen={isOpen}
    ref={innerRef}
    invertColor={invertColor}
    data-qaid={qaId}
  >
    {renderLeftIcon && (
      <IconWrapper invertColor={invertColor} data-qaid={`${qaId}-left-icon`}>
        {renderLeftIcon}
      </IconWrapper>
    )}

    <StyledInput
      value={inputProps.value}
      readOnly={inputProps.readOnly}
      isOpen={isOpen}
      placeholder={inputProps.placeholder || 'Please Select'}
      name={inputProps.name}
      onChange={inputProps.onChange}
      invertColor={invertColor}
      data-qaid={`${qaId}-input`}
    />

    {!inputProps.readOnly && inputProps.onClear && inputProps.value && (
      <ActionButton
        invertColor={invertColor}
        type="button"
        data-qaid={`${qaId}-clear`}
        onClick={inputProps.onClear}
        title="Clear"
      >
        <Icon data-qaid={`${qaId}-clear-icon`} name="close" />
      </ActionButton>
    )}

    <ActionButton
      invertColor={invertColor}
      isOpen={isOpen}
      type="button"
      data-qaid={`${qaId}-toggle`}
      title="Toggle"
    >
      <Icon
        data-qaid={`${qaId}-toggle-icon`}
        name={isOpen ? 'caretUp' : 'caretDown'}
      />
    </ActionButton>
  </Wrapper>
);

export default Input;
