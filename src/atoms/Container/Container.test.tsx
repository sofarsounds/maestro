import React from 'react';
import { mountWithTheme } from '../../test';

import Container from './index';

describe('<Container />', () => {
  it('has the correct width on xs devices', () => {
    const wrapper = mountWithTheme(<Container />);

    expect(wrapper).toHaveStyleRule('padding', '0 16px');
    expect(wrapper).toHaveStyleRule('width', '100%');
    expect(wrapper).toHaveStyleRule('margin', '0 auto');
  });

  it('has the correct width on sm devices', () => {
    const wrapper = mountWithTheme(<Container />);

    expect(wrapper).toHaveStyleRule('max-width', '540px', {
      media: '(min-width:576px)'
    });
  });

  it('has the correct width on md devices', () => {
    const wrapper = mountWithTheme(<Container />);

    expect(wrapper).toHaveStyleRule('max-width', '740px', {
      media: '(min-width:768px)'
    });
  });

  it('has the correct width on lg devices', () => {
    const wrapper = mountWithTheme(<Container />);

    expect(wrapper).toHaveStyleRule('max-width', '960px', {
      media: '(min-width:992px)'
    });
  });

  it('has the correct width on xl devices', () => {
    const wrapper = mountWithTheme(<Container />);

    expect(wrapper).toHaveStyleRule('max-width', '1160px', {
      media: '(min-width:1200px)'
    });
  });
});
