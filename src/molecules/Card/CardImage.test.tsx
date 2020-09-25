import React from 'react';
import { mountWithTheme } from '../../test';

import CardImage from './CardImage';

describe('<CardImage />', () => {
  it('has the correct style attributes on xs devices', () => {
    const wrapper = mountWithTheme(<CardImage url={'test.png'} />);

    expect(wrapper).toHaveStyleRule('width', '100%');
    expect(wrapper).toHaveStyleRule('padding-top', '65%');
    expect(wrapper).toHaveStyleRule('border-radius', '2px');
    expect(wrapper).toHaveStyleRule('background-size', 'cover');
    expect(wrapper).toHaveStyleRule('background-position', 'center');
    expect(wrapper).toHaveStyleRule('background-image', 'url(test.png)');
  });

  it('has the correct style attributes on md and upward devices', () => {
    const wrapper = mountWithTheme(<CardImage url={'test.png'} />);

    expect(wrapper).toHaveStyleRule('width', '45%', {
      media: '(min-width:768px)'
    });
    expect(wrapper).toHaveStyleRule('padding-top', '25%', {
      media: '(min-width:768px)'
    });
  });
});
