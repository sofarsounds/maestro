import React, { useState, useRef } from 'react';

import Input from './Input';
import Menu from './Menu';
import { StickyContainer, PortalComponent } from '../../util/index';
import { useOutsideClick, useKeyDown } from '../../hooks';

interface SelectProps {
  placeholder: string;
  children?: any;
  handleOptionClick?: (value: any) => void;
  readonly?: boolean;
}

const Select: React.SFC<SelectProps> = ({
  placeholder,
  children,
  readonly,
  handleOptionClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<any>();
  const [value, setValue] = useState<string>('');

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  useKeyDown('Escape', () => {
    setIsOpen(false);
  });

  const optionClick = (value: any) => {
    setValue(value);
    setIsOpen(false);
    handleOptionClick ? handleOptionClick(value) : null;
  };

  return (
    <>
      <Input
        readonly={readonly}
        innerRef={ref}
        isOpen={isOpen}
        value={value}
        placeholder={placeholder}
        toggleSelect={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <PortalComponent dom={document.body}>
          <StickyContainer stickToEl={ref.current}>
            <Menu depth={3}>{children({ optionClick })}</Menu>
          </StickyContainer>
        </PortalComponent>
      )}
    </>
  );
};

export { default as Option } from './Option';

export default Select;
