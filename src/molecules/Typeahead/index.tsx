import React from 'react';

import { useSelect } from '../../hooks';

import { SelectProps } from '../Select';
import Input from '../Select/Input';
import Options, { OptionsListProps } from '../Select/Options';

const Select = <T extends {}>({
  options: defaultOptions,
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
  const {
    selectRef,
    isOpen,
    onToggle,
    options,
    inputProps,
    clearSelection,
    onOptionClick
  } = useSelect({
    disableScrollWhenOpen,
    onChange,
    defaultOptions,
    getOptionValue,
    getOptionLabel,
    filterable: true
  });

  return (
    <>
      <Input
        innerRef={selectRef}
        isOpen={isOpen}
        invertColor={invertColor}
        inputProps={{
          id,
          name,
          placeholder,
          ...inputProps
        }}
        onToggle={() => onToggle(!isOpen)}
        onClear={clearSelection}
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
