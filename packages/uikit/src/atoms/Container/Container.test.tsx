import React from 'react';
import { mountWithTheme } from '../../test';

import Container from './index';

describe('Container', () => {
  it('renders the Container correctly with default width', () => {
    expect(mountWithTheme(<Container />)).toMatchSnapshot();
  });

  it('renders the Container correctly with small width', () => {
    expect(mountWithTheme(<Container size="small" />)).toMatchSnapshot();
  });

  it('renders the Container correctly with large width', () => {
    expect(mountWithTheme(<Container size="large" />)).toMatchSnapshot();
  });

  it('renders the Container correctly with fullscreen width', () => {
    expect(mountWithTheme(<Container size="fullscreen" />)).toMatchSnapshot();
  });
});
