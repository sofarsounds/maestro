import * as styledComponents from 'styled-components';

import Theme from '../../typings/theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
  ServerStyleSheet
} = (styledComponents as styledComponents.ThemedStyledComponentsModule<
  Theme
>) as styledComponents.ThemedStyledComponentsModule<Theme>;

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
  ServerStyleSheet
};

export default styled;
