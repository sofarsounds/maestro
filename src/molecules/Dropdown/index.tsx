import React, { useState, useRef } from 'react';

import { StickyContainer, PortalComponent } from '../../util/index';
import { useOutsideClick } from '../../hooks';

import Trigger from './DropdownTrigger';
import Flyout from './Flyout';

interface DropdownProps {
  label?: string;
  renderLabel?: () => any;
  children: any;
}
const Dropdown: React.SFC<DropdownProps> = ({
  label,
  renderLabel,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<any>();

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  return (
    <>
      <Trigger ref={ref} onClick={() => setIsOpen(!isOpen)}>
        {renderLabel ? renderLabel() : label}
      </Trigger>

      {isOpen && (
        <PortalComponent dom={document.body}>
          <StickyContainer stickToEl={ref.current}>
            <Flyout>{children}</Flyout>
          </StickyContainer>
        </PortalComponent>
      )}
    </>
  );
};

export default Dropdown;
