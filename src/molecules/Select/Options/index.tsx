import React from 'react';
import { Popper } from 'react-popper';
import styled, { css } from '../../../lib/styledComponents';
import Menu from '../../../atoms/Menu';
import MenuItem from '../../../atoms/MenuItem';
import MenuHeader from '../../../atoms/MenuHeader';
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
  onOptionClick: (option: T) => void;
  groupBy?: (option: T) => string;
  state?: SelectState;
}

const AdvancedMenu = styled(Menu)<{ isOpen: boolean; flipped: boolean }>`
  z-index: 100;

  ${({ theme, isOpen }) =>
    isOpen &&
    css`
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      margin-top: -${theme.borderRadius.default};
    `}

  ${({ theme, isOpen, flipped }) =>
    isOpen &&
    flipped &&
    css`
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      margin-bottom: -${theme.borderRadius.default};
      box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.19);
    `}
`;

const Options = <T extends {}>({
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
        placement="bottom-start"
        modifiers={{
          flip: {
            enabled: true
          },
          setPopperWidth: {
            enabled: true,
            order: 849,
            fn: (data: any) => {
              const { width, left, right } = data.offsets.reference;

              data.styles.width = width;
              data.offsets.popper.width = width;
              data.offsets.popper.left = left;
              data.offsets.popper.right = right;

              return data;
            }
          }
        }}
      >
        {({ ref, style, placement = '' }) => (
          <AdvancedMenu
            ref={ref}
            style={style}
            isOpen={isOpen}
            flipped={placement.includes('top')}
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
