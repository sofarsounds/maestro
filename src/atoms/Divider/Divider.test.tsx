import React from 'react';
import { mountWithTheme } from '../../test';

import Divider from './index';

import theme from '../../theme';

describe('<Divider />', () => {
  const wrapper = mountWithTheme(<Divider />);

  it('has the correct style rules', () => {
    expect(wrapper).toHaveStyleRule('border', 'none');
    expect(wrapper).toHaveStyleRule(
      'border-top',
      `1px solid ${theme.colours.macyGrey}`
    );
    expect(wrapper).toHaveStyleRule('width', '100%');
    expect(wrapper).toHaveStyleRule('margin', '44px 0');
  });
});
