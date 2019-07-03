import React from 'react';
import { mountWithTheme } from '../../test';

import Navbar from './NavbarContainer';

describe('Navbar <Navbar />', () => {
  it('has the correct style rules', () => {
    const wrapper = mountWithTheme(<Navbar>children</Navbar>);

    expect(wrapper).toHaveStyleRule('height', '62px');
    expect(wrapper).toHaveStyleRule('background', '#000');
    expect(wrapper).toHaveStyleRule('position', 'fixed');
    expect(wrapper).toHaveStyleRule('top', '0');
    expect(wrapper).toHaveStyleRule('left', '0');
    expect(wrapper).toHaveStyleRule('right', '0');

    expect(wrapper).toHaveStyleRule('height', '74px', {
      media: '(min-width:768px)'
    });
    expect(wrapper).toHaveStyleRule('height', '84px', {
      media: '(min-width:992px)'
    });
  });
});
