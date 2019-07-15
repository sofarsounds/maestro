import React from 'react';

import { mountWithTheme, checkStyleRules } from '../../test';
import Trigger from './DropdownTrigger';

describe('Dropdown <Trigger />', () => {
  it('has the correct style attributes', () => {
    const trigger = mountWithTheme(<Trigger />);

    checkStyleRules(trigger, {
      'font-size': '16px',
      border: 'none',
      'box-shadow': 'none',
      outline: 'none',
      cursor: 'pointer',
      margin: '0',
      padding: '0'
    });
  });
});
