import React, { useState } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  select,
  number,
  boolean
} from '@storybook/addon-knobs';

import { StickyContainerV2 } from '../../src';

const Anchor = styled.div`
  background: #ccc;
  width: 100px;
  height: 100px;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Example = () => {
  const ref = React.useRef<any>();

  return (
    <div style={{ height: '5000px' }}>
      <Anchor ref={ref}>Anchor</Anchor>
      <StickyContainerV2
        anchorEl={ref}
        position={select('Position', ['top', 'bottom', 'left', 'right'], 'top')}
      >
        I am Sticky
      </StickyContainerV2>
    </div>
  );
};

storiesOf('Sticky Container', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Example />);
