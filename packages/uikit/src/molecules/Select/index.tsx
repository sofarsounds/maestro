/* export { default as SelectInput } from './SelectInput'; */
/* export { default as SelectOptions } from './SelectInput'; */

import React, { useState } from 'react';
/* import styled from '../../lib/styledComponents'; */

import SelectInput from './SelectInput';
/* import SelectMenu from './SelectMenu.tsx'; */
/* * import { PortalComponent, StickyContainer } from '../../util/index'; *1/ */

interface SelectProps {
  placeholder: string;
  dropEl: Element;
}

const SelectComponent: React.SFC<SelectProps> = ({ placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SelectInput
        isOpen={isOpen}
        placeholder={placeholder}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && <h4>I am open</h4>}
    </>
  );
};

export default SelectComponent;
