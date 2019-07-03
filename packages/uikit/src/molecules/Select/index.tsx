import React, { useState, useRef } from 'react';

import SelectInput from './SelectInput';
import { StickyContainer } from '../../util/index';

interface SelectProps {
  placeholder: string;
}

const SelectComponent: React.SFC<SelectProps> = ({ placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<any>();

  return (
    <>
      <SelectInput
        innerRef={ref}
        isOpen={isOpen}
        placeholder={placeholder}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <StickyContainer stickToEl={ref.current}>
          <h4>I am open</h4>
        </StickyContainer>
      )}
    </>
  );
};

export default SelectComponent;
