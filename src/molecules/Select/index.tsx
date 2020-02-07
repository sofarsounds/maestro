import React from 'react';

import { useSelect } from '../../hooks';

import Input from './Input';
import Options from './Options';

interface SelectProps {
  options: any[];
  placeholder: string;

  id?: string;
  invertColor?: boolean;
  handleOptionClick?: (value: any, option: any) => void;
  disableScrollWhenOpen?: boolean;
  hasError?: boolean;
  name?: string;
  'data-qaid'?: string;
  renderLeftIcon?: (props: any) => React.ReactNode;
  getOptionValue?: (opt: any) => any;
  getOptionLabel?: (opt: any) => any;
  renderOption?: (opt: any) => React.ReactNode;
}

const Select: React.SFC<SelectProps> = ({
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
}) => {
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
