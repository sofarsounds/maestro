import React from 'react';
import { mountWithTheme } from '../../test';

import Brand from './Brand';

describe('Navbar <Brand />', () => {
  it('renders correctly', () => {
    const setup = mountWithTheme(<Brand />);

    expect(setup).toHaveStyleRule('width', '75px');
    expect(setup).toHaveStyleRule('margin-right', '20px');

    expect(setup).toMatchSnapshot();
  });
});
