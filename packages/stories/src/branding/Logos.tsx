import React from 'react';
import styled from 'styled-components';

import { Logo } from 'uikit';

import { Boundary } from '../helpers/components';

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
`;

const Inversion = styled(Row)`
  background: #000;
`;

const LogoContainer = styled.div`
  width: 100px;
  margin: 0 50px;
`;

export default () => (
  <div>
    <Row>
      <LogoContainer>
        <Boundary>
          <Logo />
        </Boundary>
      </LogoContainer>
      <LogoContainer>
        <Boundary>
          <Logo circle />
        </Boundary>
      </LogoContainer>
      <LogoContainer>
        <Boundary>
          <Logo cable />
        </Boundary>
      </LogoContainer>
    </Row>

    <Inversion>
      <LogoContainer>
        <Boundary>
          <Logo invert />
        </Boundary>
      </LogoContainer>
      <LogoContainer>
        <Boundary>
          <Logo circle invert />
        </Boundary>
      </LogoContainer>
      <LogoContainer>
        <Boundary>
          <Logo cable invert />
        </Boundary>
      </LogoContainer>
    </Inversion>
  </div>
);
