import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Link } from '../../src';

storiesOf('Link', module).add('Default', () => (
  <BrowserRouter>
    <>
      <h1>Link</h1>

      <p>
        I am a <Link to="/">Link</Link> within a paragraph!
      </p>
    </>
  </BrowserRouter>
));
