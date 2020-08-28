import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import styled from 'styled-components';

import { PrimaryButton, OutlineButton, LinkButton, Icon } from '../../src';

const Container = styled.div`
  padding: 20px;
`;

const Inversion = styled(Container)`
  background: #000;
`;

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <>
      <h1>Primary Button</h1>
      <Container>
        <PrimaryButton
          onClick={action('Primary Button clicked')}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
          small={boolean('Small', false)}
          block={boolean('Block', false)}
          data-qaid="button"
        >
          {text('Label', 'Button')}
        </PrimaryButton>
      </Container>
    </>
  ))
  .add('Outline', () => (
    <>
      <h1>Outline Button</h1>
      <Inversion>
          <OutlineButton
            onClick={action('Outline Button clicked')}
            disabled={boolean('Disabled', false)}
            loading={boolean('Loading', false)}
            small={boolean('Small', false)}
            >
            {text('Label', 'Button')}
          </OutlineButton>
      </Inversion>
      <Container>
        <OutlineButton
          onClick={action('Outline Button clicked')}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
          small={boolean('Small', false)}
          >
          {text('Label', 'Button')}
        </OutlineButton>
      </Container>
    </>
  ))
  .add('Inverted white', () => (
    <>
      <h1>Inverted Button</h1>
      <Inversion>
        <OutlineButton
          color="white"
          onClick={action('Inverted Button clicked')}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
          small={boolean('Small', false)}
        >
          {text('Label', 'Button')}
        </OutlineButton>
      </Inversion>
    </>
  ))
  .add('Inverted black', () => (
    <>
      <h1>Inverted Button</h1>
      <Container>
        <OutlineButton
          color="black"
          onClick={action('Inverted Button clicked')}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
          small={boolean('Small', false)}
        >
          {text('Label', 'Button')}
        </OutlineButton>
      </Container>
    </>
  ))
  .add('Link', () => (
    <>
      <h1>Link Button</h1>
      <Container>
        <LinkButton
          onClick={action('Link Button clicked')}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
          small={boolean('Small', false)}
        >
          {text('Label', 'Button')}
        </LinkButton>
      </Container>
    </>
  ))
  .add('With Icon', () => (
    <>
      <h1>Buttons with Icon</h1>
      <Container>
        <PrimaryButton
          onClick={action('Link Button clicked')}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
          small={boolean('Small', false)}
        >
          <Icon name="padlock" />
          {text('Label', 'Button')}
        </PrimaryButton>
        <br />
        <br />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <OutlineButton
            onClick={action('Link Button clicked')}
            disabled={boolean('Disabled', false)}
            loading={boolean('Loading', false)}
            small={boolean('Small', false)}
          >
            <Icon name="padlock" />
            {text('Label', 'Button')}
          </OutlineButton>
          &nbsp;
          <OutlineButton
            color="black"
            onClick={action('Link Button clicked')}
            disabled={boolean('Disabled', false)}
            loading={boolean('Loading', false)}
            small={boolean('Small', false)}
          >
            <Icon name="padlock" />
            {text('Label', 'Button')}
          </OutlineButton>
          &nbsp;
          <div style={{ background: '#000', padding: '15px' }}>
            <OutlineButton
              color="white"
              onClick={action('Link Button clicked')}
              disabled={boolean('Disabled', false)}
              loading={boolean('Loading', false)}
              small={boolean('Small', false)}
            >
              <Icon name="padlock" />
              {text('Label', 'Button')}
            </OutlineButton>
          </div>
        </div>
        <br />
        <br />
        <LinkButton
          onClick={action('Link Button clicked')}
          disabled={boolean('Disabled', false)}
          loading={boolean('Loading', false)}
          small={boolean('Small', false)}
        >
          <Icon name="padlock" />
          {text('Label', 'Button')}
        </LinkButton>
      </Container>
    </>
  ));
