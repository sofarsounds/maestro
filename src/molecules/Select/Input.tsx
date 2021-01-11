import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { withTextfieldStyle, withShadow } from '../../util';
import { InputProps } from '../../typings/input';

import { SelectState } from './index';
import Icon from '../../atoms/Icon';
import Spinner from '../../atoms/Spinner';

interface SelectInputProps {
  isOpen?: boolean;
  readonly?: boolean;
  invertColor?: boolean;
}

interface Wrapper {
  children?: React.ReactNode;
  isOpen?: boolean;
  hasError?: boolean;
  invertColor?: boolean;
  readOnly?: boolean;
  initialWidth?: string;
}

interface Props {
  invertColor?: boolean;
  isOpen?: boolean;
  onToggle: () => void;
  innerRef?: React.RefObject<HTMLInputElement>;
  hasError?: boolean;
  renderLeftIcon?: React.ReactNode;
  state: SelectState;
  initialWidth?: string;
  'data-qaid'?: string;

  inputProps: {
    id?: string;
    placeholder?: string;
    readOnly?: boolean;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: () => void;
  };
}

interface ButtonProps {
  isOpen?: boolean;
  children?: React.ReactNode;
  invertColor?: boolean;
}

const Wrapper = styled.div<Wrapper>`
  ${({ theme, readOnly, invertColor, isOpen, initialWidth }) => css`
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
        &:focus {
          border-color: ${theme.colors.silverSprings};
          background: rgba(219, 219, 219, 0.1); //macyGrey at 10%
        }
      `}

    ${initialWidth &&
      css`
        width: 100%;
        max-width: ${initialWidth};

        &:focus,
        &:hover,
        &:active {
          max-width: 100%;
        }

        ${isOpen &&
          css`
            max-width: 100%;
          `}
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
  state,
  initialWidth,
  'data-qaid': qaId
}) => {
  const enableClearButton =
    state === SelectState.ready &&
    !inputProps.readOnly &&
    inputProps.onClear &&
    inputProps.value;

  return (
    <Wrapper
      id={inputProps.id}
      readOnly={inputProps.readOnly}
      tabIndex={0}
      hasError={hasError}
      onClick={onToggle}
      isOpen={isOpen}
      ref={innerRef}
      invertColor={invertColor}
      initialWidth={initialWidth}
      data-qaid={qaId}
    >
      {renderLeftIcon && (
        <IconWrapper invertColor={invertColor} data-qaid={`${qaId}-left-icon`}>
          {renderLeftIcon}
        </IconWrapper>
      )}
      <StyledInput
        // We need the selectable element to also be the trigger for the Portal - what's the best way to do this?
        tabIndex={-1}
        aria-haspopup="listbox"
        value={inputProps.value}
        readOnly={inputProps.readOnly}
        isOpen={isOpen}
        placeholder={inputProps.placeholder || 'Please Select'}
        name={inputProps.name}
        onChange={inputProps.onChange}
        invertColor={invertColor}
        data-qaid={`${qaId}-input`}
        autoComplete="nope"
      />

      {state === SelectState.loading && (
        <div style={{ width: '30px' }}>
          <Spinner data-qaid={`${qaId}-spinner`} size="20px" />
        </div>
      )}

      {state === SelectState.error && (
        <Icon
          data-qaid={`${qaId}-error-icon`}
          color="redRedWine"
          name="alertTriangle"
          title="Could not load options..."
        />
      )}

      {enableClearButton && (
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
      <div id="selectOptions" tabIndex={-1} role="listbox"></div>
    </Wrapper>
  );
};
export default Input;
