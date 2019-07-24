import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { mountWithTheme } from '../../test';
import { checkStyleRules } from '../../test';

import theme from '../../theme';
import { Link } from './index';

describe('<Link />', () => {
  const wrapper = mountWithTheme(
    <MemoryRouter initialEntries={['/']}>
      <Link to="/">Link</Link>
    </MemoryRouter>
  );

  it('has the correct style attributes', () => {
    checkStyleRules(wrapper, {
      color: theme.colours.primary,
      'font-weight': 'bold'
    });
  });

  it('has the correct style attributes on hover', () => {
    checkStyleRules(
      wrapper,
      {
        color: theme.colours.primary,
        'text-decoration': 'underline'
      },
      {
        modifier: ':hover'
      }
    );
  });
});
