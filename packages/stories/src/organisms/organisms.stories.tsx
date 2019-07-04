import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action, withActions } from '@storybook/addon-actions';

import { Login } from 'uikit';

storiesOf('05 / Organisms|Login', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions('submit form'))
  .add('Login form', () => (
    <Login
      showInModal={true}
      handleSubmit={(email: string, password: string) =>
        action(`Login triggered with password: ${password} and email: ${email}`)
      }
    />
  ));
