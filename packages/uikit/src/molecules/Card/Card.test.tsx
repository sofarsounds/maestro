import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';

import { mountWithTheme } from '../../test';

import Card from './index';

describe('<Card />', () => {
  it('is not clickable in default state', () => {
    const wrapper = mountWithTheme(<Card.Container>Card</Card.Container>);

    expect(wrapper.find(Link)).toHaveLength(0);
  });

  it('is clickable when linkTo prop is being passed', () => {
    const wrapper = mountWithTheme(
      <MemoryRouter initialEntries={['/']}>
        <Card.Container linkTo="/test">Card</Card.Container>
      </MemoryRouter>
    );

    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
