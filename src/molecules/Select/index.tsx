import React from 'react';

import { useSelect } from '../../hooks';

import Input from './Input';
import Options from './Options';

interface SelectProps<T> {
  options: T[];
  placeholder: string;

  id?: string;
  invertColor?: boolean;
  handleOptionClick?: (value: any, option: T) => void;
  disableScrollWhenOpen?: boolean;
  hasError?: boolean;
  name?: string;
  'data-qaid'?: string;
  renderLeftIcon?: () => React.ReactNode;
  getOptionValue?: (opt: T) => string | number;
  getOptionLabel?: (opt: T) => string | number;
  renderOption?: (opt: { option: T; onClick: any }) => React.ReactNode;
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
