import React from 'react';
import MenuHeader from '../../atoms/MenuHeader';
import groupArray from '../../util/groupBy';

import SimpleOptions from './SimpleOptions';
import { OptionsListProps } from './Options';

interface Props<T> extends OptionsListProps<T> {
  qaId?: string;
  options: T[];
  onOptionClick: (option: T) => void;
  groupBy: (option: T) => string;
}

const GroupedOptions = <T extends {}>({
  options,
  groupBy,
  qaId,
  ...rest
}: Props<T>) => {
  const groups = groupArray(options, groupBy);

  const keys = Object.keys(groups);

  return (
    <>
      {keys.map(key => (
        <div key={`group-${key}`} data-qaid={`${qaId}-group`}>
          <MenuHeader data-qaid={`${qaId}-group-${key}-header`}>
            {key}
          </MenuHeader>

          <SimpleOptions
            options={groups[key]}
            {...rest}
            qaId={`${qaId}-group-${key}`}
          />
        </div>
      ))}
    </>
  );
};

export default GroupedOptions;
