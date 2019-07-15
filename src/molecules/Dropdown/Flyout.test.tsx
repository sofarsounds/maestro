import React from 'react';

import { mountWithTheme, checkStyleRules } from '../../test';
import Flyout from './Flyout';

describe('Dropdown <Flyout />', () => {
  it('has the correct style attributes', () => {
    const flyout = mountWithTheme(<Flyout />);

    checkStyleRules(flyout, {
      'background-color': '#FFFFFF',
      width: '300px',
      'max-height': '300px',
      'margin-top': '4px',
      'border-radius': '8px',
      padding: '32px 24px',
      'overflow-y': 'auto'
    });
  });
});
