import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import styled from 'styled-components';

import {
  Spacer,
  Spacer4,
  Spacer8,
  Spacer12,
  Spacer16,
  Spacer20,
  Spacer24,
  Spacer32,
  Spacer40,
  Spacer56,
  Spacer64,
  Spacer72,
  Spacer80,
} from '../../src';

const Space = styled.div`
  height: 25px;
`;

const Ruler = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100px;
`;

const SpacerWrapper = styled.div`
  border: 1px solid red; 
  width: fit-content; 
  background: #fff;
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
          {Array(10).fill(0).map((_, i) => (
            i > 0 && (
              <Spacer
                style={{
                  display: 'block',
                  border: '1px solid red',
                  width: '0',
                  height: '0',
                  background: '#fff',
                }}
                p={i}
                m={2}
              >
              </Spacer>
            )
          ))}
        </div>
      </div>

      <Space />

      <h1>Spacer Component (using different scale)</h1>
      <p>
        Spacer components takes "m" and "p" for "margin" and "padding".
        <br />
        You can then add t, r, l, b, x, y after m and p for top, right, left,
        bottom, horizontal, vertical
      </p>
      <div style={{ background: '#ccc' }}>
        <div>
          <SpacerWrapper>
            <Spacer4 />
          </SpacerWrapper>
          <SpacerWrapper>
            <Spacer8 />
          </SpacerWrapper>
          <SpacerWrapper>
            <Spacer12 />
          </SpacerWrapper>
          <SpacerWrapper>
            <Spacer16 />
          </SpacerWrapper>
          <SpacerWrapper>
            <Spacer20 />
          </SpacerWrapper>
          <SpacerWrapper>
            <Spacer24 />
          </SpacerWrapper>
          <SpacerWrapper>
            <Spacer32 />
          </SpacerWrapper>
          <SpacerWrapper>
            <Spacer40 />
          </SpacerWrapper>
          <SpacerWrapper>
            <Spacer56 />
          </SpacerWrapper>
          <SpacerWrapper>
            <Spacer64 />
          </SpacerWrapper>
          <SpacerWrapper>
            <Spacer72 />
          </SpacerWrapper>
          <SpacerWrapper>
            <Spacer80 />
          </SpacerWrapper>
        </div>
      </div>
    </div>
  ));
