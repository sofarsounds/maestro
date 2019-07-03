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
  Subtitle,
  Subtitle2,
  Body,
  Body2,
  Overline,
  Caption
} from './index';

const setup = (Component: any, props: any = {}) =>
  mountWithTheme(<Component {...props}>The Content</Component>);

describe('Typography', () => {
  it('renders a Title correctly', () => {
    const wrapper = setup(Title);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.title);
    expect(wrapper).toHaveStyleRule('font-weight', '800');
    expect(wrapper).toHaveStyleRule('letter-spacing', '-2px');
  });

  it('renders a H1 correctly', () => {
    const wrapper = setup(H1);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.h1);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '-1.5px');
  });

  it('renders a H2 correctly', () => {
    const wrapper = setup(H2);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.h2);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '-0.5px');
  });

  it('renders a H3 correctly', () => {
    const wrapper = setup(H3);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.h3);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', 'normal');
  });

  it('renders a H4 correctly', () => {
    const wrapper = setup(H4);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.h4);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.3px');
  });

  it('renders a H5 correctly', () => {
    const wrapper = setup(H5);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.h5);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', 'normal');
  });

  it('renders a H6 correctly', () => {
    const wrapper = setup(H6);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.h6);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.2px');
  });

  it('renders a Subtitle correctly', () => {
    const wrapper = setup(Subtitle);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.subtitle1);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.2px');
  });

  it('renders a Subtitle2 correctly', () => {
    const wrapper = setup(Subtitle2);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.subtitle2);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.1px');
  });

  it('renders a Body correctly', () => {
    const wrapper = setup(Body);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.body1);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.4px');
  });

  it('renders a Body2 correctly', () => {
    const wrapper = setup(Body2);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.body2);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.3px');
  });

  it('renders an Overline correctly', () => {
    const wrapper = setup(Overline);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.overline);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '1.5px');
    expect(wrapper).toHaveStyleRule('text-transform', 'uppercase');
  });

  it('renders a Caption correctly', () => {
    const wrapper = setup(Caption);

    expect(wrapper).toHaveStyleRule('font-size', theme.fontSizes.caption);
    expect(wrapper).toHaveStyleRule('font-weight', 'normal');
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.3px');
  });
});
