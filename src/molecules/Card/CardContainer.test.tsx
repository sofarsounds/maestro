import React from 'react';
import { mountWithTheme } from '../../test';

import CardContainer from './CardContainer';

describe('<CardContainer />', () => {
  it('has the correct style attributes on xs devices', () => {
    const wrapper = mountWithTheme(<CardContainer />);
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('flex-direction', 'column');
  });

  it('has the correct default style attributes on md and upward devices', () => {
    const wrapper = mountWithTheme(<CardContainer />);
    expect(wrapper).toHaveStyleRule('flex-direction', 'row', {
      media: '(min-width:768px)'
    });
  });

  it('has the correct reverseRow style attributes on md and upward devices', () => {
    const wrapper = mountWithTheme(<CardContainer reverseRow />);
    expect(wrapper).toHaveStyleRule('flex-direction', 'row-reverse', {
      media: '(min-width:768px)'
    });
  });
});
