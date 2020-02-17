import React from 'react';
import { Manager, Reference } from 'react-popper';

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
  id,
  name,
  hasError,
  invertColor,
  renderLeftIcon,
  searchable = false,
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
    searchable,
    defaultOptions,
    onChange
  });

  return (
    <Manager>
      <Reference innerRef={selectRef}>
        {({ ref }) => (
          <Input
            innerRef={ref}
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
        )}
      </Reference>

      <Options
        qaId={qaId}
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
      />
    </Manager>
  );
};

export default Select;
