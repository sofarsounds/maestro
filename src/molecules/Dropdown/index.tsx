import React, { useRef, useState } from 'react';
import { Manager, Reference, Popper, PopperProps } from 'react-popper';
import styled, { css } from '../../lib/styledComponents';

import Portal from '../../atoms/Portal';
import Menu from '../../atoms/Menu';
import { useOutsideClick, useDisableScroll } from '../../hooks';

import Trigger from './DropdownTrigger';

interface DropdownProps extends PopperProps {
  label?: string;
  renderLabel?: (arg?: any) => any;
  children: any;
  size?: 'small' | 'large';
  flyoutContainer?: boolean; // TODO rename to `hasFlyoutContainer` ?
  disableScrollWhenOpen?: boolean;
  offset?: {
    horizontal?: string;
    vertical?: string;
  };
  'data-qaid'?: string;
  id?: string;
}

export const StyledMenu = styled(Menu)`
  ${({ theme }) => css`
    padding: ${theme.ruler[8]}px ${theme.ruler[6]}px;
  `}
`;

const Dropdown: React.SFC<DropdownProps> = ({
  label,
  renderLabel,
  children,
  placement = 'bottom-start',
  modifiers = {
    flip: {
      enabled: true
    }
  },
  flyoutContainer = true,
  disableScrollWhenOpen = false,
  size,
  offset,
  'data-qaid': qaId,
  id
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const myRef = useRef<any>();

  useOutsideClick(myRef, () => setIsOpen(false));
  useDisableScroll(isOpen, disableScrollWhenOpen);

  let width = '200px';
  if (size === 'small') {
    width = '150px';
  } else if (size === 'large') {
    width = '250px';
  }

  const genStyle = (baseStyle: any, placement: string = '') => {
    const customStyle: any = {};
    if (offset) {
      if (offset.vertical) {
        const isFlipped = placement.includes('top');
        customStyle[isFlipped ? 'marginBottom' : 'marginTop'] = offset.vertical;
      }

      if (offset.horizontal) {
        const isFlipped = placement.includes('left');
        customStyle[isFlipped ? 'marginRight' : 'marginLeft'] =
          offset.horizontal;
      }
    }

    customStyle.zIndex = 1000;
    return { ...baseStyle, ...customStyle };
  };

  return (
    <Manager>
      <Reference innerRef={myRef}>
        {({ ref }) => (
          <Trigger
            id={id}
            ref={ref}
            onClick={() => setIsOpen(!isOpen)}
            data-qaid={qaId}
          >
            {renderLabel ? renderLabel(isOpen) : label}
          </Trigger>
        )}
      </Reference>

      {isOpen && (
        <Portal dom={document.body}>
          <Popper placement={placement} modifiers={modifiers}>
            {({ ref, style, placement }) => (
              <div
                ref={ref}
                style={genStyle(style, placement)}
                data-placement={placement}
                data-qaid={`${qaId}-flyout`}
              >
                {flyoutContainer ? (
                  <StyledMenu ref={ref} width={width}>
                    {children}
                  </StyledMenu>
                ) : (
                  children
                )}
              </div>
            )}
          </Popper>
        </Portal>
      )}
    </Manager>
  );
};

export default Dropdown;
