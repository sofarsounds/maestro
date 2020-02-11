import React from 'react';

import { useSelect } from '../../hooks';

import Input from './Input';
import Options, { OptionsListProps } from './Options';

export interface SelectProps<T> extends OptionsListProps<T> {
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

  // typeahead props
  searchable?: boolean;

  // popular picks
  popularOptions?: T[];
  getPopularOptionsTitle?: (options: T[]) => string;

  // misc props
  groupBy?: (option: T) => string;
  disableScrollWhenOpen?: boolean;
  'data-qaid'?: string;
}

const Select = <T extends {}>({
  options: defaultOptions,
  popularOptions,
  onChange,
  renderOption,
  getOptionLabel,
  getPopularOptionsTitle,
  placeholder,
  defaultValue,
  id,
  name,
  hasError,
  invertColor,
  renderLeftIcon,
  searchable = false,
  groupBy,
  disableScrollWhenOpen = false,
  'data-qaid': qaId
}: SelectProps<T>) => {
  const {
    selectRef,
    isOpen,
    onToggle,
    onOptionClick,
    inputProps,
    options
  } = useSelect<T>({
    disableScrollWhenOpen,
    getOptionLabel,
    defaultValue,
    searchable,
    defaultOptions,
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
          readOnly: !searchable,
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
        groupBy={groupBy}
        onOptionClick={onOptionClick}
        getOptionLabel={getOptionLabel}
        renderOption={renderOption}
        popularOptions={popularOptions}
        getPopularOptionsTitle={getPopularOptionsTitle}
        userIsSearching={!!inputProps.value}
      />
    </>
  );
};

export default Select;
