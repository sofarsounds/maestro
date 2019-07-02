/* export { default as SelectInput } from './SelectInput'; */
/* export { default as SelectOptions } from './SelectInput'; */

import React, { useState } from 'react';
/* import styled from '../../lib/styledComponents'; */

import SelectInput from './SelectInput';

const cat = () => {
  console.log('cat');
};

const SelectComponent: React.SFC = ({}) => {
  const [count] = useState(0);
  return (
    <>
      {count}
      <SelectInput onClick={cat} />
    </>
  );
};

export default SelectComponent;
