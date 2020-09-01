import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components';

import { Spacer } from '../../src';

const Space = styled.div`
  height: 25px;
`;

const Ruler = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100px;
`;

interface RulerProps {
  small?: boolean;
}
const LineContainer = styled(Spacer)<RulerProps>`
  display: flex;
  flex-direction: ${({ small }) => (small ? 'column-reverse' : 'column')};
  align-items: center;
  height: 100%;
`;
const NumberDiv = styled.div`
  color: red;
  font-size: 12px;
`;
const Line = styled(Spacer)<RulerProps>`
  border-left: 1px solid red;
  height: ${({ small }) => (small ? '50%' : '100%')};
`;

storiesOf('Spacer', module)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .addParameters({
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P31na2HYB09sF7v5B0nqkJ/Sofar-Design-System?node-id=438%3A2',
    }
  })
  .add('Default', () => (
    <div>
      <h1>Main Ruler</h1>
      <p>
        The main ruler uses multiple of 4s from 0 up to 80 as displayed below.
      </p>
      <Ruler>
        {Array.from({ length: 21 }, (_e, i) => (
          <LineContainer small={i % 2 === 1} mr={4}>
            <NumberDiv>{i * 4}</NumberDiv>
            <Line small={i % 2 === 1} />
          </LineContainer>
        ))}
      </Ruler>

      <Space />

      <h1>Spacer Component</h1>
      <p>
        Spacer components takes "m" and "p" for "margin" and "padding".
        <br />
        You can then add t, r, l, b, x, y after m and p for top, right, left,
        bottom, horizontal, vertical
      </p>
      <div style={{ background: '#ccc' }}>
        <div>
          <Spacer
            style={{
              display: 'inline-block',
              border: '1px solid red',
              width: '150px',
              background: '#fff'
            }}
            m={[2, 4, 6, 8]}
            p={1}
          >
            Position Me
          </Spacer>
        </div>
      </div>
    </div>
  ));
