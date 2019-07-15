import React from 'react';
import { mountWithTheme } from '../../test';

import Textarea from './index';

describe('<Textarea />', () => {
  it('renders correctly', () => {
    expect(mountWithTheme(<Textarea />)).toMatchSnapshot();
  });

  it('renders correctly in error state', () => {
    expect(mountWithTheme(<Textarea hasError />)).toMatchSnapshot();
  });

  it('renders correctly with a value', () => {
    const wrapper = mountWithTheme(
      <Textarea disabled value="I am a textarea" />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Textarea).prop('value')).toBe('I am a textarea');
  });

  it('renders correctly in disabled state', () => {
    const wrapper = mountWithTheme(<Textarea disabled value="Disabled" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Textarea).prop('disabled')).toBeTruthy();
  });
});
