import React from 'react';
import { mountWithTheme } from '../../test';

import CollapseIcon from './CollapseIcon';

const mockClick = jest.fn();

describe('Navbar <CollapseIcon />', () => {
  it('renders correctly in closed state', () => {
    const wrapper = mountWithTheme(<CollapseIcon onClick={mockClick} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when in open state', () => {
    const wrapper = mountWithTheme(<CollapseIcon onClick={mockClick} open />);

    expect(wrapper).toMatchSnapshot();
  });

  it('is clickable', () => {
    const wrapper = mountWithTheme(<CollapseIcon onClick={mockClick} open />);
    wrapper.simulate('click');

    expect(mockClick).toHaveBeenCalled();
  });
});
