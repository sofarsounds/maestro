import React from 'react';

import { mountWithTheme } from '../../test';
import Ellipsis from './Ellipsis';

describe('Pagination <Ellipsis />', () => {
  it('renders correctly', () => {
    expect(mountWithTheme(<Ellipsis />)).toMatchSnapshot();
  });
});
