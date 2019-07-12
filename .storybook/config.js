import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';

import storybookTheme from './sofarTheme';
import { theme, ThemeProvider, GlobalStyle } from '../src';

const req = require.context('../storybook', true, /\.(stories|story)\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  viewport: { viewports: INITIAL_VIEWPORTS },
  options: {
    theme: storybookTheme
  }
});

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <div style={{ padding: '10px 50px' }}>{story()}</div>
    </React.Fragment>
  </ThemeProvider>
));

configure(loadStories, module);
