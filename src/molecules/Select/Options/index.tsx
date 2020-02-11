import React from 'react';
import Menu from '../../../atoms/Menu';
import MenuItem from '../../../atoms/MenuItem';
import MenuHeader from '../../../atoms/MenuHeader';
import Popper from '../../../atoms/Popper'
import Portal from '../../../atoms/Portal'

import SimpleOptions from './Simple';
import GroupedOptions from './Grouped';

export interface OptionsListProps<T> {
  getOptionLabel: (opt: T) => string;
  renderOption?: (option: T, props: any) => React.ReactNode;
  popularOptions?: T[];
  getPopularOptionsTitle?: (options: T[]) => string;
  userIsSearching?: boolean;
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
  popularOptions,
  getPopularOptionsTitle,
  userIsSearching,
  groupBy
}: Props<T>) => {
  if (!isOpen) {
    return null;
  }

  if (!userIsSearching && popularOptions) {
    const heading = getPopularOptionsTitle
      ? getPopularOptionsTitle(popularOptions)
      : `Top ${popularOptions.length}`;

    return (
      <Portal dom={document.body}>
        <Popper
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
          flip
        >
          <Menu bordered data-qaid={`${qaId}-popular`}>
            <MenuHeader data-qaid={`${qaId}-popular-header`}>
              {heading}
            </MenuHeader>

            <SimpleOptions
              options={popularOptions}
              getOptionLabel={getOptionLabel}
              onOptionClick={onOptionClick}
              renderOption={renderOption}
              qaId={qaId}
            />
          </Menu>
        </Popper>
      </Portal>
    );
  }

  return (
    <Portal dom={document.body}>
      <Popper
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
        flip
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
      </Popper>
    </Portal>
  );
};

export default Options;
