import React from 'react';

import { useSelect } from '../../hooks';

import Input from './Input';
import Options, { OptionsListProps } from './Options';

interface SelectProps<T> extends OptionsListProps<T> {
  options: T[];
  placeholder: string;
  'data-qaid'?: string;

  id?: string;
  name?: string;
  invertColor?: boolean;
  hasError?: boolean;

  renderLeftIcon?: () => React.ReactNode;
  handleOptionClick?: (value: any, option: T) => void;
  disableScrollWhenOpen?: boolean;
}

const Select = <T extends {}>({
  options,
  placeholder,
  invertColor,
  handleOptionClick,
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
  const { selectRef, isOpen, labelText, onToggle, onOptionClick } = useSelect({
    disableScrollWhenOpen,
    handleOptionClick
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
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        renderOption={renderOption}
      />
    </>
  );
};

export default Select;
