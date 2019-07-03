import React from 'react';
import { mountWithTheme } from '../../test';

import Container from './Container';

describe('Navbar <Container />', () => {
  it('has the correct style rules', () => {
    const wrapper = mountWithTheme(<Container>children</Container>);

    expect(wrapper).toHaveStyleRule('width', '100%');
    expect(wrapper).toHaveStyleRule('max-width', '90%');

    expect(wrapper).toHaveStyleRule('max-width', '85%', {
      media: '(min-width:768px)'
    });

    expect(wrapper).toHaveStyleRule('max-width', '80%', {
      media: '(min-width:992px)'
    });
  });
});
