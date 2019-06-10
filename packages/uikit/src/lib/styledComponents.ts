import * as styledComponents from 'styled-components';

import ITheme from '../typings/theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme
} = (styledComponents as styledComponents.ThemedStyledComponentsModule<
  any
>) as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, withTheme };

export default styled;
