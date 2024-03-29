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
import useDeviceDetector from '../../../hooks/useDeviceDetector';
import { getPosition } from '../../../hooks/usePosition';
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
  searchable: boolean;
  groupBy?: (option: T) => string;
  state?: SelectState;
}

const AdvancedMenu = styled(Menu)<{ isOpen: boolean; isFlipped: boolean }>`
  ${({ isOpen, isFlipped }) =>
    isOpen &&
    !isFlipped &&
    css`
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    `}

  ${({ isOpen, isFlipped }) =>
    isOpen &&
    isFlipped &&
    css`
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.19);
    `}
`;

const MobileContainer = styled.div`
  position: absolute;
  z-index: 10;
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
  groupBy,
  searchable
}: Props<T>) => {
  const isMobile = useDeviceDetector() === 'mobile';

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

  /*
    The Popper component doesn't behave as expected on mobile browsers when an input
    is focused and the soft keyboard is triggered. Additionally, many mobile browsers
    treat fixed and absolute positioned elements as static when an input is focused. Because
    of all this, the Popper calculations fail, displaying the select options in the wrong position.
    This alternative uses a dumber component that requires less calculations and it's a bit less flexible, in an attempt to give mobile users a better experience when using searchable select
    fields.
  */
  if (isMobile && searchable) {
    const anchorRefPositionAttributes = getPosition(innerRef.current);

    return (
      <MobileContainer
        style={{
          top: `${(innerRef as any).current.offsetTop +
            anchorRefPositionAttributes.height}px`,
          width: `${anchorRefPositionAttributes.width}px`
        }}
      >
        <AdvancedMenu
          isOpen={isOpen}
          isFlipped={false}
          bordered
          data-qaid={`${qaId}-${showPopularOptions ? 'popular' : 'menu'}`}
        >
          {renderOptions()}
        </AdvancedMenu>
      </MobileContainer>
    );
  }

  return (
    <Portal dom={document.body}>
      <Popper
        anchorEl={innerRef}
        reactToChange={options.length}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        offset={{
          vertical: -2
        }}
        width="auto"
        flip
      >
        {({
          ref,
          style,
          isFlipped
        }: {
          ref: any;
          style: any;
          isFlipped: boolean;
        }) => (
          <AdvancedMenu
            ref={ref}
            style={style}
            isOpen={isOpen}
            isFlipped={isFlipped}
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
