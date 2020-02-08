import React from 'react';

import { useSelect } from '../../hooks';

import Input from './Input';
import Options, { OptionsListProps } from './Options';

interface SelectProps<T> extends OptionsListProps<T> {
  // select props
  options: T[];
  onChange: (option: T) => void;

  // input props
  placeholder: string;
  defaultValue?: T | null;
  id?: string;
  name?: string;
  hasError?: boolean;
  invertColor?: boolean;
  renderLeftIcon?: React.ReactNode;

  // misc props
  disableScrollWhenOpen?: boolean;
  'data-qaid'?: string;
}

const Select = <T extends {}>({
  options,
  onChange,
  renderOption,
  getOptionLabel,
  placeholder,
  defaultValue,
  id,
  name,
  hasError,
  invertColor,
  renderLeftIcon,
  disableScrollWhenOpen = false,
  'data-qaid': qaId
}: SelectProps<T>) => {
  const { selectRef, isOpen, labelText, onToggle, onOptionClick } = useSelect({
    disableScrollWhenOpen,
    getOptionLabel,
    defaultValue,
    onChange
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
          value: labelText,
          name
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
        getOptionLabel={getOptionLabel}
        renderOption={renderOption}
      />
    </>
  );
};

export default Select;
