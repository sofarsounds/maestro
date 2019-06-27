import React from 'react';
import styled from 'styled-components';
import { select } from '@storybook/addon-knobs';

import { Container } from 'uikit';

const ColContent = styled.div`
  background: #ccc;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
`;

export default () => (
  <div>
    <Container
      size={select(
        'Size',
        ['default', 'small', 'large', 'fullscreen'],
        'default'
      )}
    >
      <ColContent>Container</ColContent>
    </Container>
  </div>
);
