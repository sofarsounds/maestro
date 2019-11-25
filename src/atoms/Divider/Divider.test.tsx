import React from 'react';
import { mountWithTheme } from '../../test';

import Divider from './index';

import theme from '../../theme';

describe('<Divider />', () => {
  it('has the correct style rules', () => {
    const wrapper = mountWithTheme(<Divider />);

    expect(wrapper).toHaveStyleRule('border', 'none');
    expect(wrapper).toHaveStyleRule(
      'border-top',
      `1px solid ${theme.colors.silverSprings}`
    );
    expect(wrapper).toHaveStyleRule('width', '100%');
    expect(wrapper).toHaveStyleRule('margin', '44px 0');
  });

  it('applies a custom space before and after', () => {
    const wrapper = mountWithTheme(<Divider space={2} />);

    expect(wrapper).toHaveStyleRule('margin', '8px 0');
  });

  it('applies a custom color', () => {
    const wrapper = mountWithTheme(<Divider color="redRedWine" />);

    expect(wrapper).toHaveStyleRule(
      'border-top',
      `1px solid ${theme.colors.redRedWine}`
    );
  });
});
