import React, { useState, useRef } from 'react';

import Input from './Input';
import Menu from './Menu';
import { StickyContainer, PortalComponent } from '../../util/index';
import { useOutsideClick, useKeyDown } from '../../hooks';

interface SelectProps {
  children?: any;
  handleOptionClick?: (value: any) => void;
  readonly?: boolean;
  isOpen: boolean;
  component: React.ReactNode;
}

const Dropdown: React.SFC<SelectProps> = ({
  children,
  readonly,
  handleOptionClick,
  isOpen,
  component
}) => {
  const ref = useRef<any>();
  const [value, setValue] = useState<string>('');

  useOutsideClick(ref, () => {
    /* setIsOpen(false); */
  });

  useKeyDown('Escape', () => {
    /* setIsOpen(false); */
  });

  const optionClick = (value: any) => {
    setValue(value);
    /* setIsOpen(false); */
    handleOptionClick ? handleOptionClick(value) : null;
  };

  return (
    <>
      <PortalComponent dom={document.body}>
        <StickyContainer stickToEl={ref.current}>
          <Menu depth={3}>{children({ optionClick })}</Menu>
        </StickyContainer>
      </PortalComponent>
    </>
  );
};

export default Dropdown;
