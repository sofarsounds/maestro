import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { mountWithTheme } from '../../test';
import { checkStyleRules } from '../../test';

import theme from '../../theme';
import { Link } from './index';

describe('<Link />', () => {
  it('has the correct style attributes', () => {
    const wrapper = mountWithTheme(
      <MemoryRouter initialEntries={['/']}>
        <Link to="/">Link</Link>
      </MemoryRouter>
    );

    expect(wrapper).toHaveStyleRule('color', theme.colors.primary);
    expect(wrapper).toHaveStyleRule('font-weight', 'bold');
  });

  it('has the correct style attributes on hover', () => {
    const wrapper = mountWithTheme(
      <MemoryRouter initialEntries={['/']}>
        <Link to="/">Link</Link>
      </MemoryRouter>
    );

    checkStyleRules(
      wrapper,
      {
        color: theme.colors.primary,
        'text-decoration': 'underline'
      },
      {
        modifier: ':hover'
      }
    );
  });
});
