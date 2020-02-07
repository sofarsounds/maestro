import React from 'react';

import { useSelect } from '../../hooks';

import Input from './Input';
import Options, { OptionsListProps } from './Options';

export interface SelectProps<T> extends OptionsListProps<T> {
  options: T[];
  placeholder: string;
  onChange: (option: T | null) => void;
  'data-qaid'?: string;

  id?: string;
  name?: string;
  invertColor?: boolean;
  hasError?: boolean;

  renderLeftIcon?: () => React.ReactNode;
  disableScrollWhenOpen?: boolean;
}

const Select = <T extends {}>({
  options,
  placeholder,
  invertColor,
  onChange,
  disableScrollWhenOpen = false,
  hasError,
  name,
  id,
  renderLeftIcon,
  getOptionLabel,
  getOptionValue,
  renderOption,
  'data-qaid': qaId
}: SelectProps<T>) => {
  const { selectRef, isOpen, onToggle, inputProps, onOptionClick } = useSelect({
    disableScrollWhenOpen,
    onChange,
    defaultOptions: options
  });

  return (
    <>
      <Input
        innerRef={selectRef}
        isOpen={isOpen}
        invertColor={invertColor}
        inputProps={{
          id,
          readOnly: true,
          placeholder,
          name,
          ...inputProps
        }}
        onToggle={() => onToggle(!isOpen)}
        renderLeftIcon={renderLeftIcon}
        hasError={hasError}
        data-qaid={qaId}
      />

      <Options
        qaId={qaId}
        innerRef={selectRef}
        isOpen={isOpen}
        options={options}
        onOptionClick={onOptionClick}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        renderOption={renderOption}
      />
    </>
  );
};

export default Select;
