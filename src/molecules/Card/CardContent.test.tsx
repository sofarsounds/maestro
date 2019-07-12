import React from 'react';
import { mountWithTheme } from '../../test';

import CardContent from './CardContent';

describe('<CardContent />', () => {
  const wrapper = mountWithTheme(<CardContent />);
  it('has the correct style attributes on xs devices', () => {
    expect(wrapper).toHaveStyleRule('flex', '1');
    expect(wrapper).toHaveStyleRule('padding-top', '16px');
  });

  it('has the correct style attributes on md and upward devices', () => {
    expect(wrapper).toHaveStyleRule('padding', '16px 28px', {
      media: '(min-width:768px)'
    });
  });
});
