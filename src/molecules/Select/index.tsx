import React from 'react';

import { useSelect } from '../../hooks';

import Input from './Input';
import Options, { OptionsListProps } from './Options';

export enum SelectState {
  ready = 'ready',
  loading = 'loading',
  error = 'error'
}

export interface SelectProps<T> extends OptionsListProps<T> {
  // select props
  options: T[];
  onChange: (option: T) => void;

  // input props
  placeholder: string;
  defaultValue?: T | null;
  value?: T | null;
  id?: string;
  name?: string;
  hasError?: boolean;
  invertColor?: boolean;
  renderLeftIcon?: React.ReactNode;

  // typeahead props
  searchable?: boolean;
  filterBy?: (option: T, query: string) => boolean;

  // popular picks
  popularOptions?: T[];
  getPopularOptionsTitle?: (options: T[]) => string;

  // misc props
  initialWidth?: string;
  groupBy?: (option: T) => string;
  disableScrollWhenOpen?: boolean;
  state?: SelectState;
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
  value,
  id,
  name,
  hasError,
  invertColor,
  renderLeftIcon,
  searchable = false,
  filterBy,
  groupBy,
  initialWidth,
  state = SelectState.ready,
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
    value,
    searchable,
    filterBy,
    defaultOptions,
    // @ts-ignore
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
        state={state}
        initialWidth={initialWidth}
        data-qaid={qaId}
      />
      {isOpen && (
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
          state={state}
          userIsSearching={!!inputProps.value}
          searchable={searchable}
        />
      )}
    </>
  );
};

export default Select;
