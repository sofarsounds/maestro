import React from 'react';
import { mountWithTheme } from '../../test';

import theme from '../../theme';

import {
  Title,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Body,
  Body2,
  Overline,
  Caption,
  Anchor1,
  Anchor2,
  FormGroupLabel
} from './index';

const setup = (Component: any, props: any = {}) =>
  mountWithTheme(<Component {...props}>The Content</Component>);

const checkResponsiveFontSize = (wrapper: any, fontSizes: any) => {
  expect(wrapper).toHaveStyleRule('font-size', fontSizes.xs);

  expect(wrapper).toHaveStyleRule('font-size', fontSizes.md, {
    media: '(min-width:768px)'
  });

  expect(wrapper).toHaveStyleRule('font-size', fontSizes.lg, {
    media: '(min-width:992px)'
  });
};

describe('Typography', () => {
  it('renders a Title correctly', () => {
    const wrapper = setup(Title);

    expect(wrapper).toHaveStyleRule('font-weight', '800');
    expect(wrapper).toHaveStyleRule('letter-spacing', '-2px');

    checkResponsiveFontSize(wrapper, theme.fontSizes.title);
  });

  it('renders a H1 correctly', () => {
    const wrapper = setup(H1);

    expect(wrapper).toHaveStyleRule('font-weight', '600');
    expect(wrapper).toHaveStyleRule('letter-spacing', '-1.5px');

    checkResponsiveFontSize(wrapper, theme.fontSizes.h1);
  });

  it('renders a H2 correctly', () => {
    const wrapper = setup(H2);

    expect(wrapper).toHaveStyleRule('font-weight', '600');
    expect(wrapper).toHaveStyleRule('letter-spacing', '-0.5px');

    checkResponsiveFontSize(wrapper, theme.fontSizes.h2);
  });

  it('renders a H3 correctly', () => {
    const wrapper = setup(H3);

    expect(wrapper).toHaveStyleRule('font-weight', '600');
    expect(wrapper).toHaveStyleRule('letter-spacing', 'normal');

    checkResponsiveFontSize(wrapper, theme.fontSizes.h3);
  });

  it('renders a H4 correctly', () => {
    const wrapper = setup(H4);

    expect(wrapper).toHaveStyleRule('font-weight', '600');
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.3px');

    checkResponsiveFontSize(wrapper, theme.fontSizes.h4);
  });

  it('renders a H5 correctly', () => {
    const wrapper = setup(H5);

    expect(wrapper).toHaveStyleRule('font-weight', '600');
    expect(wrapper).toHaveStyleRule('letter-spacing', 'normal');

    checkResponsiveFontSize(wrapper, theme.fontSizes.h5);
  });

  it('renders a H6 correctly', () => {
    const wrapper = setup(H6);

    expect(wrapper).toHaveStyleRule('font-weight', '600');
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.2px');

    checkResponsiveFontSize(wrapper, theme.fontSizes.h6);
  });

  it('renders a Body correctly', () => {
    const wrapper = setup(Body);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.body1);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.4px');
    expect(wrapper).toHaveStyleRule('line-height', '1.75');
  });

  it('renders a Body2 correctly', () => {
    const wrapper = setup(Body2);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.body2);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.3px');
    expect(wrapper).toHaveStyleRule('line-height', '1.43');
  });

  it('renders an Overline correctly', () => {
    const wrapper = setup(Overline);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.overline);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '1.5px');
    expect(wrapper).toHaveStyleRule('text-transform', 'uppercase');
    expect(wrapper).toHaveStyleRule('line-height', '1.6');
  });

  it('renders an Anchor1 correctly', () => {
    const wrapper = setup(Anchor1);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.body1);
    expect(wrapper).toHaveStyleRule('color', theme.colors.primary);
    expect(wrapper).toHaveStyleRule('font-weight', '600');
  });

  it('renders an Anchor2 correctly', () => {
    const wrapper = setup(Anchor2);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.body2);
    expect(wrapper).toHaveStyleRule('color', theme.colors.primary);
    expect(wrapper).toHaveStyleRule('font-weight', '600');
  });

  it('renders a Caption correctly', () => {
    const wrapper = setup(Caption);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.caption);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.3px');
    expect(wrapper).toHaveStyleRule('line-height', '1.6');
  });

  it('renders a FormGroupLabel correctly', () => {
    const wrapper = setup(FormGroupLabel);

    expect(wrapper).toHaveStyleRule(
      'font-size',
      theme.fontSizes.formGroupLabel
    );
    expect(wrapper).toHaveStyleRule('font-weight', '600');
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.1px');
    expect(wrapper).toHaveStyleRule('margin-bottom', '8px');
  });
});
