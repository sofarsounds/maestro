import React from 'react';
import { mountWithTheme } from '../../test';

import ItemContainer from './ItemContainer';

describe('Navbar <ItemContainer />', () => {
  it('has the correct style rules', () => {
    const wrapper = mountWithTheme(<ItemContainer>children</ItemContainer>);

    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('flex-direction', 'column');

    expect(wrapper).toHaveStyleRule('flex-direction', 'row', {
      media: '(min-width:768px)'
    });
    expect(wrapper).toHaveStyleRule('align-items', 'center', {
      media: '(min-width:768px)'
    });
    expect(wrapper).toHaveStyleRule('flex', '1', {
      media: '(min-width:768px)'
    });
  });

  it('has the correct style rules with a given align', () => {
    const wrapper = mountWithTheme(
      <ItemContainer align="right">children</ItemContainer>
    );

    expect(wrapper).toHaveStyleRule('justify-content', 'flex-end', {
      media: '(min-width:768px)'
    });
  });
});
