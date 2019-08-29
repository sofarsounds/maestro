import React, { useState, useRef } from 'react';

import { StickyContainerV2, PortalComponent } from '../../util/index';
import { StickyContainerProps } from '../../util/StickyContainerV2';
import { useDisableScroll, useOutsideClick } from '../../hooks';

import Trigger from './DropdownTrigger';
import Flyout, { FlyoutSizes } from './Flyout';

interface DropdownProps extends StickyContainerProps {
  label?: string;
  renderLabel?: (arg?: any) => any;
  children: any;
  size?: FlyoutSizes;
  flyoutContainer?: boolean; // TODO rename to `hasFlyoutContainer` ?
  disableScrollWhenOpen?: boolean;
  'data-qaid'?: string;
  id?: string;
}

const Dropdown: React.SFC<DropdownProps> = ({
  label,
  renderLabel,
  children,
  flyoutContainer,
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

  useDisableScroll(isOpen, disableScrollWhenOpen);

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

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
        <PortalComponent dom={document.body}>
          <StickyContainerV2
            offset={offset}
            anchorEl={ref}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
            keepInViewPort={keepInViewPort}
          >
            <Flyout
              flyoutContainer={flyoutContainer}
              size={size}
              data-qaid={`${qaId}-flyout`}
            >
              {children}
            </Flyout>
          </StickyContainerV2>
        </PortalComponent>
      )}
    </>
  );
};

export default Dropdown;
