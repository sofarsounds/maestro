import React from 'react';

import { mountWithTheme } from '../../test';
import Menu from './Menu';

const setup = (width = 200, isSelect = false) =>
  mountWithTheme(
    <Menu width={width} isSelect={isSelect} depth={2}>
      I am a child component
    </Menu>
  );

describe('Select <Menu />', () => {
  it('it renders correctly', () => {
    expect(setup()).toMatchSnapshot();
  });

  it('renders child components', () => {
    expect(setup().props().children.props.children).toBe(
      'I am a child component'
    );
  });

  it('shows the utility shadow css properties', () => {
    expect(setup()).toHaveStyleRule(
      'box-shadow',
      '0 3px 6px 0 rgba(0,0,0,0.16), 0 3px 6px 0 rgba(0,0,0,0.23)'
    );
  });

  it('adjusts the width when passed a prop', () => {
    expect(setup()).toHaveStyleRule('width', '200px');
    expect(setup(240)).toHaveStyleRule('width', '240px');
  });

  it('squares off the top left and right corners', () => {
    expect(setup(200, true)).not.toHaveStyleRule(
      'border-top-left-raidus',
      '8px'
    );
    expect(setup(200, false)).toHaveStyleRule('border-top-left-radius', '8px');
  });
});
