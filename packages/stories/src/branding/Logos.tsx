import React from 'react';
import { Logo } from 'uikit';
import { Boundary, Row, Inversion, Container } from '../helpers/components';

export default () => (
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
);
