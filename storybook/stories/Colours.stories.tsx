import React from 'react';
import styled from 'styled-components';

import { theme } from '../../src';

import { storiesOf } from '@storybook/react';

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  column-gap: 20px;
  margin-bottom: 50px;
`;

const Panel = styled.div`
  width: 100%;
  margin-bottom: 50px;
  background: #fff;
`;

const Heading = styled.div`
  font-weight: bold;
  margin: 5px 0;
`;

const Color = styled.div<any>`
  height: 120px;
  background: ${({ bg }) => bg};
  border-radius: 4px;
`;

const Footer = styled.div`
  font-size: 80%;
`;

const ColorPanel: React.SFC<any> = ({ colorName, hex }) => (
  <Panel>
    <Color bg={hex} />
    <Heading>{colorName}</Heading>
    <Footer>{hex}</Footer>
  </Panel>
);

storiesOf('Colors', module).add(
  'Brand',
  () => <>
    <h1>color Schema</h1>

    <Row>
      <ColorPanel colorName="Primary" hex={theme.colors.primary} />
    </Row>

    <h2>Blacks & Greys</h2>
    <Row>
      {[
        'backToBlack',
        'blackBetty',
        'paintItBlack',
        'blueSmoke',
        'macyGrey',
        'silverSprings',
        'whiteDenim'
      ].map(k => <ColorPanel key={k} colorName={k} hex={theme.colors[k]} />)}
    </Row>

    <h2>Shades of Green</h2>
    <Row>
      {[
        'green900',
        'green800',
        'green700',
        'green600',
        'green500',
        'green400',
        'green300',
        'green200',
        'green100',
        'green50'
      ].map(k => <ColorPanel key={k} colorName={k} hex={theme.colors[k]} />)}
    </Row>

    <h2>Misc colors</h2>
     <Row>
      {[
        'greenOnions',
        'greenGarden',
        'purpleHaze',
        'blueChristmas',
        'purplePills',
        'checkBerry',
        'blueMagic',
        'brownSugar',
        'pinkTriangle',
        'royalBlood',
        'redRedWine',
        'peaches',
        'orangeCrush',
        'mellowYellow',
        'yellowSubmarine',
      ].map(k => <ColorPanel key={k} colorName={k} hex={theme.colors[k]} />)}
     </Row>
  </>,
  {
    isToolshown: false
  }
);
