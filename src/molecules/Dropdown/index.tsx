import React, { useState, useRef } from 'react';

import { StickyContainerV2, PortalComponent } from '../../util/index';
import { useOutsideClick } from '../../hooks';

import Trigger from './DropdownTrigger';
import Flyout, { FlyoutSizes } from './Flyout';

interface DropdownProps {
  label?: string;
  renderLabel?: (arg?: any) => any;
  children: any;
  size?: FlyoutSizes;
  offsetTop?: number;
  anchorOrigin?: {
    vertical: string;
    horizontal: string;
  };
  transformOrigin?: {
    vertical: string;
    horizontal: string;
  };
  flyoutContainer?: boolean; // TODO rename to `hasFlyoutContainer` ?
  'data-qaid'?: string;
}
const Dropdown: React.SFC<DropdownProps> = ({
  label,
  renderLabel,
  children,
  flyoutContainer,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left'
  },
  transformOrigin = {
    vertical: 'top',
    horizontal: 'left'
  },
  size,
  offsetTop,
  'data-qaid': qaId
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<any>();

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  return (
    <>
      <Trigger ref={ref} onClick={() => setIsOpen(!isOpen)} data-qaid={qaId}>
        {renderLabel ? renderLabel(isOpen) : label}
      </Trigger>

      {isOpen && (
        <PortalComponent dom={document.body}>
          <StickyContainerV2
            offsetTop={offsetTop}
            anchorEl={ref}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
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
