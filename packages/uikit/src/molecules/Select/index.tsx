import React, { useState, useRef } from 'react';

import SelectInput from './SelectInput';
import Menu from './Menu';
import { StickyContainer, PortalComponent } from '../../util/index';

interface SelectProps {
  placeholder: string;
  children?: any;
  defaultValue?: any;
}

const SelectComponent: React.SFC<SelectProps> = ({
  placeholder,
  children,
  defaultValue
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<any>();
  const [value, setValue] = useState<string>('');

  const onSelect = (value: any) => {
    setValue(value);
    setIsOpen(false);
  };

  return (
    <>
      <SelectInput
        innerRef={ref}
        isOpen={isOpen}
        value={value}
        placeholder={placeholder}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <PortalComponent dom={document.body}>
          <StickyContainer stickToEl={ref.current}>
            <Menu depth={3}>{children({ onSelect })}</Menu>
          </StickyContainer>
        </PortalComponent>
      )}
    </>
  );
};

export default SelectComponent;
