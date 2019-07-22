import React, { useState, useRef } from 'react';

import { StickyContainer, PortalComponent } from '../../util/index';
import { useOutsideClick } from '../../hooks';

import Trigger from './DropdownTrigger';
import Flyout, { FlyoutSizes } from './Flyout';

interface DropdownProps {
  label?: string;
  renderLabel?: (arg?: any) => any;
  children: any;
  size?: FlyoutSizes;
  offsetTop?: number;
  flyoutContainer?: boolean;
  'data-qaid'?: string;
}
const Dropdown: React.SFC<DropdownProps> = ({
  label,
  renderLabel,
  children,
  flyoutContainer,
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
          <StickyContainer offsetTop={offsetTop} stickToEl={ref.current}>
            <Flyout
              flyoutContainer={flyoutContainer}
              size={size}
              data-qaid={`${qaId}-flyout`}
            >
              {children}
            </Flyout>
          </StickyContainer>
        </PortalComponent>
      )}
    </>
  );
};

export default Dropdown;
