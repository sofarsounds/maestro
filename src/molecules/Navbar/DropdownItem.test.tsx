import React from 'react';
import { mountWithTheme } from '../../test';

import DropdownItem, { SubItem, SubItems } from './DropdownItem';
import Item from './Item';

describe('Navbar <DropdownItem />', () => {
  it('renders correctly in closed state', () => {
    const wrapper = mountWithTheme(
      <DropdownItem title="Your Account"></DropdownItem>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const wrapper = mountWithTheme(
      <DropdownItem title="Your Account">
        <SubItem href="/dashboard">Dashboard</SubItem>
        <SubItem href="/profile/edit">Edit Profile</SubItem>
        <SubItem href="http://dev.sofarsounds.com/auth/signout">
          Sign Out
        </SubItem>
      </DropdownItem>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('is initially closed', () => {
    const wrapper = mountWithTheme(
      <DropdownItem title="Your Account">
        <SubItem href="/dashboard">Dashboard</SubItem>
        <SubItem href="/profile/edit">Edit Profile</SubItem>
        <SubItem href="http://dev.sofarsounds.com/auth/signout">
          Sign Out
        </SubItem>
      </DropdownItem>
    );
    expect(wrapper.find(SubItems)).toHaveStyleRule('display', 'none');
  });

  it('opens when clicked', () => {
    const wrapper = mountWithTheme(
      <DropdownItem title="Your Account">
        <SubItem href="/dashboard">Dashboard</SubItem>
        <SubItem href="/profile/edit">Edit Profile</SubItem>
        <SubItem href="http://dev.sofarsounds.com/auth/signout">
          Sign Out
        </SubItem>
      </DropdownItem>
    );
    wrapper.find(Item).simulate('click');
    expect(wrapper.find(SubItems)).toHaveStyleRule('display', 'block');
  });
});
