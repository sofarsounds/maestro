import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { IconLabel, Spacer } from '../../src';

const Container = styled.div`
  padding: 20px;
  background: #f3f3f3;
`;

const StyledIconLabel = styled(IconLabel)`
  width: 100%;
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
        <IconLabel draft labelText="Venue Name" />
        <Spacer mt={2} />
        <IconLabel
          labelText="Venue Name"
          imageUrl={
            'https://images.prismic.io/sofar-blog/3d748cb2-c88e-41ce-bd39-6ed00471efb9_3%403x.jpg?auto=compress,format&rect=0,68,702,566&w=556&h=448'
          }
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
        <Spacer mt={2} />
        <IconLabel
          color="green600"
          emptyIcon={true}
          invertIcon
          labelText="With empty icon"
        />
        <Spacer mt={2} />
        <IconLabel
          color="purplePills"
          icon="party"
          invertIcon
          upperLabelText="AUDIO"
          labelText="Adam West"
        />
        <Spacer mt={2} />
        <IconLabel
          color="purplePills"
          icon="party"
          invertIcon
          upperLabelText="SPACE ENGINEER"
          labelText="Neil A. Armstrong Jr."
        />
        <Spacer mt={2} />
        <StyledIconLabel
          color="purplePills"
          icon="party"
          invertIcon
          labelText="This is an IconLabel component styled to have full width using styled components"
        />
      </Container>
    </>
  ));
