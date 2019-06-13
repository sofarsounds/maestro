import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';

import storybookTheme from "./sofarTheme";
import theme from '../../uikit/src/theme';
import GlobalStyle from '../../uikit/src/global';

const req = require.context('../src', true, /\.(stories|story)\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
<<<<<<< HEAD
  viewport: { viewports: INITIAL_VIEWPORTS }
});
addDecorator(withA11y);
=======
  options: {
    theme: storybookTheme
  }
});

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } });
>>>>>>> master
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <div style={{ padding: '10px 50px' }}>{story()}</div>
    </React.Fragment>
  </ThemeProvider>
));

configure(loadStories, module);
