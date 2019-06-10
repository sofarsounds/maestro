import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import theme from '../../uikit/src/theme';
import GlobalStyle from '../../uikit/src/global';

const req = require.context('../src', true, /\.(stories|story)\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } });
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      {story()}
    </React.Fragment>
  </ThemeProvider>
));

configure(loadStories, module);
