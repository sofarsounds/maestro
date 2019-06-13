import React from 'react';
import { mountWithTheme } from '../../test';

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

describe('Typography', () => {
  it('renders a Title correctly', () => {
    expect(mountWithTheme(<Title>Title</Title>)).toMatchSnapshot();
  });

  it('renders a H1 correctly', () => {
    expect(mountWithTheme(<H1>Heading 1</H1>)).toMatchSnapshot();
  });

  it('renders a H2 correctly', () => {
    expect(mountWithTheme(<H2>Heading 2</H2>)).toMatchSnapshot();
  });

  it('renders a H3 correctly', () => {
    expect(mountWithTheme(<H3>Heading 3</H3>)).toMatchSnapshot();
  });

  it('renders a H4 correctly', () => {
    expect(mountWithTheme(<H4>Heading 4</H4>)).toMatchSnapshot();
  });

  it('renders a H5 correctly', () => {
    expect(mountWithTheme(<H5>Heading 5</H5>)).toMatchSnapshot();
  });

  it('renders a H6 correctly', () => {
    expect(mountWithTheme(<H6>Heading 6</H6>)).toMatchSnapshot();
  });

  it('renders a Subtitle correctly', () => {
    expect(mountWithTheme(<Subtitle>Subtitle</Subtitle>)).toMatchSnapshot();
  });

  it('renders a Subtitle 2 correctly', () => {
    expect(mountWithTheme(<Subtitle2>Subtitle 2</Subtitle2>)).toMatchSnapshot();
  });

  it('renders a Body correctly', () => {
    expect(mountWithTheme(<Body>Body</Body>)).toMatchSnapshot();
  });

  it('renders a Body 2 correctly', () => {
    expect(mountWithTheme(<Body2>Body 2</Body2>)).toMatchSnapshot();
  });

  it('renders an Overline correctly', () => {
    expect(mountWithTheme(<Overline>Overline</Overline>)).toMatchSnapshot();
  });

  it('renders an Caption correctly', () => {
    expect(mountWithTheme(<Caption>Caption</Caption>)).toMatchSnapshot();
  });
});
