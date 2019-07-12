import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Logo } from 'uikit';

import { Boundary, Row, Inversion, Container } from '../helpers/components';

storiesOf('Logo', module).add('Sofar Logos', () => (
  <div>
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
