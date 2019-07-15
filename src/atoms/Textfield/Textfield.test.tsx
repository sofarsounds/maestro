import React from 'react';
import { mountWithTheme } from '../../test';

import Textfield from './index';

describe('<Textfield />', () => {
  it('renders correctly', () => {
    expect(mountWithTheme(<Textfield />)).toMatchSnapshot();
  });

  it('renders correctly in error state', () => {
    expect(mountWithTheme(<Textfield hasError />)).toMatchSnapshot();
  });

  it('renders correctly with a value', () => {
    const wrapper = mountWithTheme(
      <Textfield disabled value="I am a textfield" />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Textfield).prop('value')).toBe('I am a textfield');
  });

  it('renders correctly in disabled state', () => {
    const wrapper = mountWithTheme(<Textfield disabled value="Disabled" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Textfield).prop('disabled')).toBeTruthy();
  });
});
