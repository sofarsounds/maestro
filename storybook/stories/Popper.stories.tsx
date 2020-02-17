import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  select,
  number,
  boolean
} from '@storybook/addon-knobs';

import { Popper } from '../../src';

const Anchor = styled.div<any>`
  background: #ccc;
  width: 100px;
  height: 100px;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ fixed }) =>
    fixed &&
    css`
      position: fixed;
    `}
`;

const StickyStyle = styled.div`
  width: 200px;
  height: 50px;
  background: #bbb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Example = () => {
  const ref = React.useRef<any>();

  return (
    <div style={{ height: '5000px' }}>
      <Anchor ref={ref} fixed={boolean('Fix Anchor', false)}>
        Anchor
      </Anchor>
      <Popper
        anchorEl={ref}
        anchorOrigin={{
          vertical: select(
            'Vertical Origin',
            ['top', 'center', 'bottom'],
            'top'
          ),
          horizontal: select(
            'Horizontal Origin',
            ['left', 'center', 'right'],
            'left'
          )
        }}
        transformOrigin={{
          vertical: select(
            'Transform Vertical Origin',
            ['top', 'center', 'bottom'],
            'top'
          ),
          horizontal: select(
            'Transform Horizontal Origin',
            ['left', 'center', 'right'],
            'left'
          )
        }}
        offset={{
          vertical: number('Vertical Offset', 0),
          horizontal: number('Horizontal Offset', 0)
        }}
        keepInViewPort={boolean('Keep in viewport?', false)}
        flip={boolean('Flip', false)}
      >
        {({ ref, style }: any) => (
          <StickyStyle ref={ref} style={style}>
            I am Sticky
          </StickyStyle>
        )}
      </Popper>
    </div>
  );
};

storiesOf('Popper', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Example />);
