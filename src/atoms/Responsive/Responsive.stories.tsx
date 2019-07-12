import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Responsive from './index'

const Example = styled.div`
  border: 1px dashed #ccc;
  padding: 10px;
  margin-bottom: 20px;
`;

const Box = styled.div`
  background: #ccc;
  padding: 25px;
  margin: 5px 0;
`;

const Spacer = styled.div`
  height: 50px;
`;

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

storiesOf('Responsive', module).add('Basic', () => (
  <div>
    <h1>Responsive Wrapper</h1>

    <p>
      The responsive wrapper allows you to show or hide content on given screen
      sizes. Unlike bootstraps css method, this wrapper actually unmounts the
      elements that are supposed to be hidden.
    </p>
    <p>Props: hide, show, hideUp, showUp</p>

    <h2>Show on exact screen sizes</h2>
    {sizes.map(s => (
      <Example key={s}>
        Only visible on {s} devices:
        <Responsive show={s}>
          <Box>I am visible only on {s} devices</Box>
        </Responsive>
      </Example>
    ))}

    <Spacer />

    <h2>Hide on exact screen sizes</h2>
    {sizes.map(s => (
      <Example key={s}>
        Hidden only on {s} devices:
        <Responsive hide={s}>
          <Box>I am hidden only on {s} devices</Box>
        </Responsive>
      </Example>
    ))}

    <Spacer />

    <h2>Show on screen size and upwards</h2>
    {sizes.map(s => (
      <Example key={s}>
        Visible only on {s} devices and up:
        <Responsive showUp={s}>
          <Box>I am visible only on {s} devices and up</Box>
        </Responsive>
      </Example>
    ))}

    <Spacer />

    <h2>Hide on screen size and upwards</h2>
    {sizes.map(s => (
      <Example key={s}>
        Hidden only on {s} devices and up:
        <Responsive hideUp={s}>
          <Box>I am hidden only on {s} devices and up</Box>
        </Responsive>
      </Example>
    ))}
  </div>
));
