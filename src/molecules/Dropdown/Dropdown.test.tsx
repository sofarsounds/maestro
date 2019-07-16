import React from 'react';

import { mountWithTheme } from '../../test';
import Dropdown from './index';
import Trigger from './DropdownTrigger';
import Flyout from './Flyout';

const OutsideDiv = () => <button>bla</button>;

const setup = (flyoutContainer: boolean = true) =>
  mountWithTheme(
    <>
      <OutsideDiv />
      <Dropdown flyoutContainer={flyoutContainer} label="I am a dropdown">
        Dropdown Content
      </Dropdown>
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

  it('render the flyout container with the correct styles', () => {
    const wrapper = setup(true);
    wrapper.find(Trigger).simulate('click');
    expect(wrapper.find(Flyout)).toHaveStyleRule('width', '200px');
  });

  it('does not render the styled flyout container when the prop is false', () => {
    const wrapper = setup(false);
    wrapper.find(Trigger).simulate('click');
    expect(wrapper.find(Flyout)).toHaveLength(1);
    expect(wrapper.find(Flyout)).not.toHaveStyleRule('width', '200px');
  });

  it.todo('closes the flyout when clicked outside');
  it.todo('closes the flyout when keydown escape');
});
