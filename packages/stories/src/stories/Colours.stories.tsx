import React from 'react';
import styled from 'styled-components';

import { theme } from 'uikit';


import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';


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

const Colour = styled.div<any>`
  height: 120px;
  background: ${({ bg }) => bg};
  border-radius: 4px;
`;

const Footer = styled.div`
  font-size: 80%;
`;

const ColourPanel: React.SFC<any> = ({ colourName, hex }) => (
  <Panel>
    <Colour bg={hex} />
    <Heading>{colourName}</Heading>
    <Footer>{hex}</Footer>
  </Panel>
);

storiesOf('Colours', module).add(
  'Brand',
  () => (
    <>
      <h1>Colour Schema</h1>

      <Row>
        <ColourPanel colourName="Primary" hex={theme.colours.primary} />
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
        ].map(k => (
          <ColourPanel key={k} colourName={k} hex={theme.colours[k]} />
        ))}
      </Row>

      <h2>Shades of Green</h2>
      <Row>
        {[
          'green900',
          'green700',
          'green600',
          'green500',
          'green400',
          'green300',
          'green200',
          'green100',
          'green50'
        ].map(k => (
          <ColourPanel key={k} colourName={k} hex={theme.colours[k]} />
        ))}
      </Row>

      <h2>Misc Colours</h2>
      <Row>
        <ColourPanel colourName="redRedWine" hex={theme.colours.redRedWine} />
      </Row>
    </>
  ),
  {
    isToolshown: false
  }
);
