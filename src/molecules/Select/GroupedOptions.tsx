import React from 'react';
import MenuHeader from '../../atoms/MenuHeader';

import groupArray from './groupBy';
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
  ...rest
}: Props<T>) => {
  const groups = groupArray(options, groupBy);

  const keys = Object.keys(groups);

  return (
    <>
      {keys.map(key => (
        <React.Fragment
          data-qaid={`${rest.qaId}-group-${key}`}
          key={`group-${key}`}
        >
          <MenuHeader data-qaid={`${rest.qaId}-group-header`}>{key}</MenuHeader>

          <SimpleOptions options={groups[key]} {...rest} />
        </React.Fragment>
      ))}
    </>
  );
};

export default GroupedOptions;
