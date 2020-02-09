import React from 'react';
import Menu from '../../../atoms/Menu';
import MenuItem from '../../../atoms/MenuItem';
import { StickyContainer, PortalComponent } from '../../../util/index';

import SimpleOptions from './Simple';
import GroupedOptions from './Grouped';

export interface OptionsListProps<T> {
  getOptionLabel: (opt: T) => string;
  renderOption?: (option: T, props: any) => React.ReactNode;
}

interface Props<T> extends OptionsListProps<T> {
  qaId?: string;
  options: T[];
  isOpen: boolean;
  innerRef: React.RefObject<HTMLDivElement>;
  onOptionClick: (option: T) => void;
  groupBy?: (option: T) => string;
}

const Options = <T extends {}>({
  innerRef,
  isOpen,
  qaId,
  getOptionLabel,
  renderOption,
  options,
  onOptionClick,
  groupBy
}: Props<T>) => {
  if (!isOpen) {
    return null;
  }

  return (
    <PortalComponent dom={document.body}>
      <StickyContainer
        anchorEl={innerRef}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        width="auto"
      >
        <Menu bordered data-qaid={`${qaId}-menu`}>
          {options.length === 0 && (
            <MenuItem disabled data-qaid={`${qaId}-empty`}>
              No options...
            </MenuItem>
          )}

          {!groupBy && (
            <SimpleOptions
              qaId={qaId}
              options={options}
              getOptionLabel={getOptionLabel}
              onOptionClick={onOptionClick}
              renderOption={renderOption}
            />
          )}

          {groupBy && (
            <GroupedOptions
              qaId={qaId}
              options={options}
              groupBy={groupBy}
              getOptionLabel={getOptionLabel}
              onOptionClick={onOptionClick}
              renderOption={renderOption}
            />
          )}
        </Menu>
      </StickyContainer>
    </PortalComponent>
  );
};

export default Options;
