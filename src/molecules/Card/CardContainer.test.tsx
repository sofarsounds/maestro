import React from 'react';
import { mountWithTheme } from '../../test';

import CardContainer from './CardContainer';

describe('<CardContainer />', () => {
  const wrapper = mountWithTheme(<CardContainer />);
  it('has the correct style attributes on xs devices', () => {
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('flex-direction', 'column');
  });

  it('has the correct style attributes on md and upward devices', () => {
    expect(wrapper).toHaveStyleRule('flex-direction', 'row', {
      media: '(min-width:768px)'
    });
  });
});
