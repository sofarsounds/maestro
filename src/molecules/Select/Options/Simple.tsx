import React from 'react';
import MenuItem from '../../../atoms/MenuItem';

import { OptionsListProps } from './';

interface Props<T> extends OptionsListProps<T> {
  qaId?: string;
  options: T[];
  onOptionClick: (option: T) => void;
}

const SimpleOptions = <T extends {}>({
  options,
  getOptionLabel,
  onOptionClick,
  renderOption,
  qaId
}: Props<T>) => (
  <>
    {options.map((option, key) => {
      const label = getOptionLabel(option);
      const onClick = () => onOptionClick(option);

      if (renderOption) {
        return renderOption(option, { onClick });
      }

      return (
        <MenuItem
          key={key}
          data-qaid={`${qaId}-option`}
          tabIndex={key}
          onClick={onClick}
          role="option"
        >
          {label}
        </MenuItem>
      );
    })}
  </>
);

export default SimpleOptions;
