import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs'
import styled from 'styled-components';

import { IconLabel, Spacer } from '../../src';

const Container = styled.div`
  padding: 20px;
  background: #F3F3F3;
`;

storiesOf('IconLabel', module)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .add('Default', () => (
    <>
      <h1>IconLabels</h1>
      <Container>
        <IconLabel />
        <Spacer mt={2} />
        <IconLabel 
          draft 
          labelText="Venue Name" 
        />
        <Spacer mt={2} />
        <IconLabel 
          labelText="Venue Name" 
          imageUrl={'https://images.prismic.io/sofar-blog/3d748cb2-c88e-41ce-bd39-6ed00471efb9_3%403x.jpg?auto=compress,format&rect=0,68,702,566&w=556&h=448'}
        />
        <Spacer mt={2} />
        <IconLabel 
          color="orangeCrush" 
          icon="mail" 
          iconSize="10px"
          labelText="Venue Name" 
        />
        <Spacer mt={2} />
        <IconLabel 
          color="purplePills" 
          icon="party" 
          invertIcon 
          labelText="15 Landsdowne St. Boston, MA" 
        />
      </Container>
    </>
  ));
