import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { Logo } from '../../src';

import { Boundary, Row, Inversion, Container } from '../helpers/components';

storiesOf('Logo', module)
  .addDecorator(withDesign)
  .addParameters({
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P31na2HYB09sF7v5B0nqkJ/Sofar-Design-System?node-id=3%3A2',
    },
  })
  .add('Sofar Logos', () => (
  <div>
    <h1>Logos</h1>
    <Row>
      <Container>
        <Boundary>
          <Logo />
        </Boundary>
      </Container>
      <Container>
        <Boundary>
          <Logo circle />
        </Boundary>
      </Container>
      <Container>
        <Boundary>
          <Logo cable />
        </Boundary>
      </Container>
    </Row>

    <br />
    <br />

    <h1>Inverted Logos</h1>

    <Inversion>
      <Container>
        <Boundary>
          <Logo invert />
        </Boundary>
      </Container>
      <Container>
        <Boundary>
          <Logo circle invert />
        </Boundary>
      </Container>
      <Container>
        <Boundary>
          <Logo cable invert />
        </Boundary>
      </Container>
    </Inversion>
  </div>
));
