import * as styledComponents from 'styled-components';

import Theme from '../typings/theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme
} = (styledComponents as styledComponents.ThemedStyledComponentsModule<
  any
>) as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, withTheme };

export default styled;
