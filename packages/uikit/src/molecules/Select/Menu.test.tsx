import React from 'react';

import { mountWithTheme } from '../../test';
import Menu from './Menu';

const setup = () => mountWithTheme(<Menu depth={2} />);

describe('Select <Menu />', () => {
  it('it renders correctly when the first page is active', () => {
    expect(setup()).toMatchSnapshot();
  });

  it('it renders child components', () => {
    const wrapper = mountWithTheme(
      <Menu depth={2}>I am a child component</Menu>
    );
    expect(wrapper.props().children.props.children).toBe(
      'I am a child component'
    );
  });

  it('it shows the utility shadow css properties', () => {
    expect(setup()).toHaveStyleRule(
      'box-shadow',
      '0 3px 6px 0 rgba(0,0,0,0.16), 0 3px 6px 0 rgba(0,0,0,0.23)'
    );
  });
});
