import React from 'react';

import { mountWithTheme } from '../../test';
import Dropdown from './index';
import Trigger from './DropdownTrigger';
import Flyout from './Flyout';

const OutsideDiv = () => <button>bla</button>;

const setup = () =>
  mountWithTheme(
    <>
      <OutsideDiv />
      <Dropdown label="I am a dropdown">Dropdown Content</Dropdown>
    </>
  );

describe('<Dropdown />', () => {
  it('renders correctly', () => {
    expect(setup()).toMatchSnapshot();
  });

  it('renders the label correctly', () => {
    const wrapper = setup();
    expect(wrapper.find(Trigger).text()).toBe('I am a dropdown');
  });

  it('opens the dropdown flyout when the trigger is clicked', () => {
    const wrapper = setup();
    expect(wrapper.find(Flyout)).toHaveLength(0);
    wrapper.find(Trigger).simulate('click');
    expect(wrapper.find(Flyout)).toHaveLength(1);
  });

  it('renders the dropdown flyout content correctly', () => {
    const wrapper = setup();
    wrapper.find(Trigger).simulate('click');

    expect(wrapper.find(Flyout).text()).toBe('Dropdown Content');
  });

  it('closes the dropdown when clicking on the trigger again', () => {
    const wrapper = setup();
    wrapper.find(Trigger).simulate('click');
    wrapper.find(Trigger).simulate('click');
    expect(wrapper.find(Flyout)).toHaveLength(0);
  });

  it.todo('closes the flyout when clicked outside');
  it.todo('closes the flyout when keydown escape');
});
