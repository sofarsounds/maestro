import React from 'react';
import { mountWithTheme } from '../../test';

import {
  BaseButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  LinkButton
} from './index';

const onClickMock = jest.fn();

const setup = (
  Component: any,
  disabled: boolean = false,
  loading: boolean = false
) =>
  mountWithTheme(
    <Component
      disabled={disabled}
      loading={loading}
      onClick={() => onClickMock()}
    >
      Button
    </Component>
  );

describe('Buttons', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Base Button', () => {
    it('is clickable', () => {
      const wrapper = setup(BaseButton, false, false);
      wrapper.simulate('click');
      expect(onClickMock).toHaveBeenCalled();
    });

    it('is not clickable in disabled state', () => {
      const wrapper = setup(BaseButton, true, false);
      expect(wrapper.find(BaseButton).prop('disabled')).toBeTruthy();
      wrapper.simulate('click');
      expect(onClickMock).not.toHaveBeenCalled();
    });

    it('is not clickable in loading state', () => {
      const wrapper = setup(BaseButton, true, true);
      expect(wrapper.find(BaseButton).prop('loading')).toBeTruthy();
      wrapper.simulate('click');
      expect(onClickMock).not.toHaveBeenCalled();
    });
  });

  describe('Primary Button', () => {
    it('renders correctly', () => {
      expect(setup(PrimaryButton)).toMatchSnapshot();
    });

    it('renders correctly in disabled state', () => {
      expect(setup(PrimaryButton, true)).toMatchSnapshot();
    });

    it('renders correctly in loading state', () => {
      expect(setup(PrimaryButton, false, true)).toMatchSnapshot();
    });
  });

  describe('Secondary Button', () => {
    it('renders correctly', () => {
      expect(setup(SecondaryButton)).toMatchSnapshot();
    });

    it('renders correctly in disabled state', () => {
      expect(setup(SecondaryButton, true)).toMatchSnapshot();
    });

    it('renders correctly in loading state', () => {
      expect(setup(SecondaryButton, false, true)).toMatchSnapshot();
    });
  });

  
  describe('Tertiary Button', () => {
    it('renders correctly', () => {
      expect(setup(TertiaryButton)).toMatchSnapshot();
    });

    it('renders correctly in disabled state', () => {
      expect(setup(TertiaryButton, true)).toMatchSnapshot();
    });

    it('renders correctly in loading state', () => {
      expect(setup(TertiaryButton, false, true)).toMatchSnapshot();
    });

  describe('QuaternaryButton', () => {
    it('renders correctly', () => {
      expect(setup(TertiaryButton)).toMatchSnapshot();
    });

    it('renders correctly in disabled state', () => {
      expect(setup(TertiaryButton, true)).toMatchSnapshot();
    });

    it('renders correctly in loading state', () => {
      expect(setup(TertiaryButton, false, true)).toMatchSnapshot();
    });
  });

  describe('Link Button', () => {
    it('renders correctly', () => {
      expect(setup(LinkButton)).toMatchSnapshot();
    });

    it('renders correctly in disabled state', () => {
      expect(setup(LinkButton, true)).toMatchSnapshot();
    });

    it('renders correctly in loading state', () => {
      expect(setup(LinkButton, false, true)).toMatchSnapshot();
    });
  });
});
