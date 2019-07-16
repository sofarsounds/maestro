import React from 'react';

import { mountWithTheme, checkStyleRules } from '../../test';
import Flyout from './Flyout';

describe('Dropdown <Flyout />', () => {
  it('has the correct style attributes', () => {
    const flyout = mountWithTheme(<Flyout />);

    checkStyleRules(flyout, {
      'background-color': '#FFFFFF',
      width: '200px',
      'max-height': '300px',
      'margin-top': '4px',
      'border-radius': '8px',
      padding: '32px 24px',
      'overflow-y': 'auto'
    });
  });

  it('has the correct style attributes when size is small', () => {
    const flyout = mountWithTheme(<Flyout size="small" />);

    checkStyleRules(flyout, {
      width: '150px'
    });
  });

  it('has the correct style attributes when size is large', () => {
    const flyout = mountWithTheme(<Flyout size="large" />);

    checkStyleRules(flyout, {
      width: '250px'
    });
  });

  it('does not display the styled flyout container when set to false ', () => {
    const flyout = mountWithTheme(<Flyout flyoutContainer={false} />);
    expect(flyout).not.toHaveStyleRule('width', '200px');
    expect(flyout).not.toHaveStyleRule('border-radius', '8px');
    expect(flyout).not.toHaveStyleRule('overflow-y', 'auto');
  });
});
