import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from '../src/lib/styledComponents';
import theme from '../src/theme';

export const shallowWithTheme = (tree: any) =>
  shallow(<ThemeProvider theme={theme}>{tree}</ThemeProvider>);

export const mountWithTheme = (tree: any) =>
  mount(<ThemeProvider theme={theme}>{tree}</ThemeProvider>);
