import React from 'react';
import styled, { css } from '../../../lib/styledComponents';
import Menu from '../../../atoms/Menu';
import MenuItem from '../../../atoms/MenuItem';
import MenuHeader from '../../../atoms/MenuHeader';
import Popper from '../../../atoms/Popper';
import Portal from '../../../atoms/Portal';

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

const AdvancedMenu = styled(Menu)<{ isOpen: boolean; contactPoint: string }>`
  ${({ theme, isOpen, contactPoint }) =>
    isOpen &&
    contactPoint === 'bottom' &&
    css`
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      margin-top: -${theme.borderRadius.default};
    `}

  ${({ theme, isOpen, contactPoint }) =>
    isOpen &&
    contactPoint === 'top' &&
    css`
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      margin-bottom: -${theme.borderRadius.default};
      box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.19);
    `}
`;

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
          {({ contactPoint }: { contactPoint: string }) => (
            <AdvancedMenu
              contactPoint={contactPoint}
              isOpen={isOpen}
              bordered
              data-qaid={`${qaId}-popular`}
            >
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
            </AdvancedMenu>
          )}
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
        {({ contactPoint }: { contactPoint: string }) => (
          <AdvancedMenu
            isOpen={isOpen}
            contactPoint={contactPoint}
            bordered
            data-qaid={`${qaId}-menu`}
          >
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
          </AdvancedMenu>
        )}
      </Popper>
    </Portal>
  );
};

export default Options;
