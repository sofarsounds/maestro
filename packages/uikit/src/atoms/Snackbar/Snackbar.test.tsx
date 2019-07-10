import React from 'react';
import { mountWithTheme } from '../../test';

import Snackbar, {
  DismissSnackbarIconContainer,
  SnackbarTextStyled
} from './index';

const onClickMock = jest.fn();

const setup = (
  Component: any,
  text: string = 'error loading please contact us'
) =>
  mountWithTheme(
    <Component text={text} onCancel={onClickMock}>
      Snackbar
    </Component>
  );

describe('Snackbar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('SnackbarStyled', () => {
    it('has the correct style rules', () => {
      const wrapper = setup(Snackbar);

      expect(wrapper).toHaveStyleRule('background-color', '#111111');
      expect(wrapper).toHaveStyleRule('border-radius', '8px');
      expect(wrapper).toHaveStyleRule(
        'box-shadow',
        '0 10px 20px 0 rgba(0,0,0,0.19)'
      );
    });
  });

  describe('SnackbarTextStyled ', () => {
    it('has the correct style rules', () => {
      const wrapper = setup(Snackbar);
      let textStyled = wrapper.find(SnackbarTextStyled);

      expect(textStyled).toHaveStyleRule('font-size', '14px');
      expect(textStyled).toHaveStyleRule('font-style', 'normal');
      expect(textStyled).toHaveStyleRule('font-stretch', 'normal');
      expect(textStyled).toHaveStyleRule('line-height', '1.71');
      expect(textStyled).toHaveStyleRule('letter-spacing', '0.1px');
      expect(textStyled).toHaveStyleRule('padding', '16px 0px 16px 24px');
      expect(textStyled).toHaveStyleRule('color', '#FFFFFF');
    });
  });

  describe('Snackbar Container', () => {
    it('renders correctly', () => {
      expect(setup(Snackbar)).toMatchSnapshot();
    });
  });

  describe('Icon Container', () => {
    it('is clickable', () => {
      const wrapper = setup(Snackbar);
      let dismissContainer = wrapper.find(DismissSnackbarIconContainer);
      dismissContainer.simulate('click');
      expect(onClickMock).toHaveBeenCalled();
    });
  });
});
