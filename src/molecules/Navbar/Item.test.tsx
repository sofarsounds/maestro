import React from 'react';
import theme from '../../theme';
import { mountWithTheme } from '../../test';

import Item from './Item';

describe('Navbar <Item />', () => {
  it('has the correct style rules', () => {
    const wrapper = mountWithTheme(<Item>children</Item>);

    expect(wrapper).toHaveStyleRule('color', theme.colors.whiteDenim);
    expect(wrapper).toHaveStyleRule('font-size', '14px');
    expect(wrapper).toHaveStyleRule('padding', '12px 0px');
    expect(wrapper).toHaveStyleRule('white-space', 'nowrap');

    expect(wrapper).toHaveStyleRule('padding', '10px 12px', {
      media: '(min-width:768px)'
    });
  });

  it('has the correct style rules when emphasized', () => {
    const wrapper = mountWithTheme(<Item emphasize>children</Item>);

    expect(wrapper).toHaveStyleRule('text-align', 'center');
    expect(wrapper).toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.whiteDenim}`
    );
    expect(wrapper).toHaveStyleRule(
      'border-radius',
      theme.borderRadius.default
    );
    expect(wrapper).toHaveStyleRule('font-weight', 'bold');
  });
});
