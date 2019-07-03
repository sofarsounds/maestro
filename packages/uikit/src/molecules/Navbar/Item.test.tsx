import React from 'react';
import { mountWithTheme } from '../../test';

import Item from './Item';

describe('Navbar <Item />', () => {
  it('has the correct style rules', () => {
    const wrapper = mountWithTheme(<Item>children</Item>);

    expect(wrapper).toHaveStyleRule('color', '#FFFFFF');
    expect(wrapper).toHaveStyleRule('font-size', '14px');
    expect(wrapper).toHaveStyleRule('padding', '15px 0px');
    expect(wrapper).toHaveStyleRule('white-space', 'nowrap');

    expect(wrapper).toHaveStyleRule('padding', '10px 6px', {
      media: '(min-width:768px)'
    });
  });
});
