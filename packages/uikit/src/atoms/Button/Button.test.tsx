import React from 'react';
import { mountWithTheme } from '../../test';
import theme from '../../theme';
import { BaseButton, PrimaryButton, OutlineButton, LinkButton } from './index';

const onClickMock = jest.fn();

const setup = (
  Component: any,
  disabled: boolean = false,
  loading: boolean = false,
  colour: string = 'primary'
) =>
  mountWithTheme(
    <Component
      disabled={disabled}
      loading={loading}
      colour={colour}
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

  describe('Outline Button', () => {
    it('renders correctly', () => {
      expect(setup(OutlineButton)).toMatchSnapshot();
    });

    it('renders white outline Button correctly', () => {
      const wrapper = setup(OutlineButton, false, false, 'primary');
      expect(wrapper.find(OutlineButton).prop('colour')).toBe('primary');
      expect(wrapper).toHaveStyleRule('color', theme.colours.primary);
      expect(wrapper).toHaveStyleRule('background', theme.colours.whiteDenim);
      expect(wrapper).toHaveStyleRule(
        'border',
        `1px solid ${theme.colours.primary}`
      );
    });

    it('renders correctly in disabled state', () => {
      expect(setup(OutlineButton, true)).toMatchSnapshot();
      const wrapper = setup(OutlineButton, true, false, 'white');
      expect(wrapper.find(OutlineButton).prop('colour')).toBe('white');
      expect(wrapper).toHaveStyleRule('color', theme.colours.whiteDenim);
      expect(wrapper).toHaveStyleRule('background', theme.colours.whiteDenim);
    });

    it('renders correctly in loading state', () => {
      expect(setup(OutlineButton, false, true, 'black')).toMatchSnapshot();
      const wrapper = setup(OutlineButton, false, true, 'black');
      expect(wrapper.find(OutlineButton).prop('loading')).toBeTruthy();
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
