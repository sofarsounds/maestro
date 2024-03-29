import React from 'react';
import { mountWithTheme } from '../../test';

import { FormGroupLabel } from '../../atoms/Typography';
import FormGroup from './index';
import Textfield from '../../atoms/Textfield';
import Icon from '../../atoms/Icon';
import theme from '../../theme';

const setup = (
  label: string,
  required?: boolean,
  errorMsg?: string,
  renderIcon?: any
) =>
  mountWithTheme(
    <FormGroup
      label={label}
      required={required}
      errorMsg={errorMsg}
      renderIcon={renderIcon}
    >
      <Textfield placeholder="Test Input" />
    </FormGroup>
  );

describe('<FormGroup />', () => {
  it('renders correctly', () => {
    const wrapper = setup('A Label');

    expect(wrapper.text()).toContain('A Label');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a required indicator', () => {
    const wrapper = setup('A required field', true);

    expect(wrapper.text()).toContain('A required field*');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a with an Icon', () => {
    const wrapper = setup('A required field', true, undefined, () => (
      <Icon name="helpCircleOutline" />
    ));

    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a error message', () => {
    const wrapper = setup('An error field', true, 'Something went wrong');

    expect(wrapper.text()).toContain('Something went wrong');
    expect(wrapper).toMatchSnapshot();
  });

  it('applies a hasError prop to the input', () => {
    const wrapper = setup('An error field', true, 'Something went wrong');

    expect(wrapper.find(FormGroupLabel)).toHaveStyleRule(
      'color',
      theme.colors.redRedWine
    );
    expect(wrapper.find(Textfield)).toHaveStyleRule(
      'border-color',
      theme.colors.redRedWine
    );
    expect(wrapper).toMatchSnapshot();
  });
});
