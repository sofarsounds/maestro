import React from 'react';
import { mountWithTheme } from '../../test';

import Container from './index';

const wrapper = mountWithTheme(<Container />);

describe('<Container />', () => {
  it('has the correct width on xs devices', () => {
    expect(wrapper).toHaveStyleRule('padding', '0 16px');
    expect(wrapper).toHaveStyleRule('width', '100%');
    expect(wrapper).toHaveStyleRule('margin', '0 auto');
  });

  it('has the correct width on sm devices', () => {
    expect(wrapper).toHaveStyleRule('max-width', '540px', {
      media: '(min-width:576px)'
    });
  });

  it('has the correct width on md devices', () => {
    expect(wrapper).toHaveStyleRule('max-width', '720px', {
      media: '(min-width:768px)'
    });
  });

  it('has the correct width on lg devices', () => {
    expect(wrapper).toHaveStyleRule('max-width', '960px', {
      media: '(min-width:992px)'
    });
  });

  it('has the correct width on xl devices', () => {
    expect(wrapper).toHaveStyleRule('max-width', '1140px', {
      media: '(min-width:1200px)'
    });
  });
});
