import React from 'react';
import { mountWithTheme } from '../../test';

import Snackbar, { CancelButton } from './index';

const onClickMock = jest.fn();

const setup = (
  Component: any,
  text: string = 'error loading please contact us'
) => mountWithTheme(<Component onCancel={onClickMock}>{text}</Component>);

describe('<Snackbar />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('has the correct style rules', () => {
    const wrapper = setup(Snackbar);

    expect(wrapper).toHaveStyleRule('background-color', '#111111');
    expect(wrapper).toHaveStyleRule('border-radius', '8px');
    expect(wrapper).toHaveStyleRule(
      'box-shadow',
      '0 10px 20px 0 rgba(0,0,0,0.19)'
    );
  });

  it('it is cancelable', () => {
    const wrapper = setup(Snackbar);
    let dismissContainer = wrapper.find(CancelButton);
    dismissContainer.simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
