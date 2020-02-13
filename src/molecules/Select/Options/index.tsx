import React from 'react';
import styled, { css } from '../../../lib/styledComponents';
import Menu from '../../../atoms/Menu';
import MenuItem from '../../../atoms/MenuItem';
import MenuHeader from '../../../atoms/MenuHeader';
import Popper from '../../../atoms/Popper';
import Portal from '../../../atoms/Portal';

import { SelectState } from '../index';
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
  state?: SelectState;
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
  state,
  groupBy
}: Props<T>) => {
  if (!isOpen) {
    return null;
  }

  const showPopularOptions = popularOptions && !userIsSearching;

  const renderOptions = () => {
    switch (state) {
      case SelectState.loading: {
        return (
          <MenuItem disabled data-qaid={`${qaId}-loading-msg`}>
            Loading...
          </MenuItem>
        );
      }
      case SelectState.error: {
        return (
          <MenuItem disabled data-qaid={`${qaId}-error-msg`}>
            Could not load options!
          </MenuItem>
        );
      }
      case SelectState.ready: {
        if (options.length === 0) {
          return (
            <MenuItem disabled data-qaid={`${qaId}-empty-msg`}>
              No options...
            </MenuItem>
          );
        }

        if (popularOptions && !userIsSearching) {
          return (
            <>
              <MenuHeader data-qaid={`${qaId}-popular-header`}>
                {getPopularOptionsTitle
                  ? getPopularOptionsTitle(popularOptions)
                  : `Top ${popularOptions.length}`}
                ;
              </MenuHeader>

              <SimpleOptions
                options={popularOptions}
                getOptionLabel={getOptionLabel}
                onOptionClick={onOptionClick}
                renderOption={renderOption}
                qaId={qaId}
              />
            </>
          );
        }

        return (
          <>
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
          </>
        );
      }
    }

    return null;
  };

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
            data-qaid={`${qaId}-${showPopularOptions ? 'popular' : 'menu'}`}
          >
            {renderOptions()}
          </AdvancedMenu>
        )}
      </Popper>
    </Portal>
  );
};

export default Options;
