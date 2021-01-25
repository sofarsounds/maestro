import React, { useState, useRef } from 'react';
import styled, { css } from '../../lib/styledComponents';

import Popper, { PopperProps } from '../../atoms/Popper';
import Portal from '../../atoms/Portal';
import Menu from '../../atoms/Menu';
import { useDisableScroll, useOutsideClick } from '../../hooks';

import Trigger from './DropdownTrigger';

interface DropdownProps extends PopperProps {
  label?: string;
  renderLabel?: (arg?: any) => any;
  children: any;
  size?: 'small' | 'large';
  flyoutContainer?: boolean; // TODO rename to `hasFlyoutContainer` ?
  disableScrollWhenOpen?: boolean;
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
  flyoutContainer = true,
  disableScrollWhenOpen = false,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left'
  },
  transformOrigin = {
    vertical: 'top',
    horizontal: 'left'
  },
  offset,
  keepInViewPort,
  size,
  'data-qaid': qaId,
  id
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<any>();
  const menuRef = useRef<any>();

  useDisableScroll(isOpen, disableScrollWhenOpen);

  useOutsideClick(menuRef, () => {
    setIsOpen(false);
  });

  let width = '200px';
  if (size === 'small') {
    width = '150px';
  } else if (size === 'large') {
    width = '250px';
  }

  return (
    <>
      <Trigger
        id={id}
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
        data-qaid={qaId}
      >
        {renderLabel ? renderLabel(isOpen) : label}
      </Trigger>

      {isOpen && (
        <Portal dom={document.body}>
          <Popper
            offset={offset}
            anchorEl={ref}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
            keepInViewPort={keepInViewPort}
          >
            {flyoutContainer ? (
              <StyledMenu width={width} ref={menuRef} data-qaid={`${qaId}-flyout`}>
                {children}
              </StyledMenu>
            ) : (
              children
            )}
          </Popper>
        </Portal>
      )}
    </>
  );
};

export default Dropdown;
