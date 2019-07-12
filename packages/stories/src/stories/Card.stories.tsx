import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';

import { Card } from 'uikit';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('With Image', () => {
    const inverted = boolean('Inverted', false);
    return (
      <BrowserRouter>
        <div
          style={{
            width: '100%',
            maxWidth: '950px',
            background: inverted ? '#000' : '#fff'
          }}
        >
          <Card.Container linkTo="https://www.google.com" inverted={inverted}>
            <Card.Image
              url={text(
                'Image URL',
                'https://sofarlive.cdn.prismic.io/sofarlive/ab56300a2ff2f667c6af44d2c0d301daa0865855_oompa-boston-041118-brandon_johnson2.jpg'
              )}
            />
            <Card.Content>
              <Card.Title>
                {text('Title', 'Sofar turns 10! Celebrate with us')}
              </Card.Title>
              <Card.Preview>
                {text(
                  'Body',
                  'Can you believe it? Sofar Sounds is turning TEN! What started as a little side hobby in a London flat with just eight people is now in...'
                )}
              </Card.Preview>
              <Card.Footer>{text('Footer', 'Customisable Footer')}</Card.Footer>
            </Card.Content>
          </Card.Container>
        </div>
      </BrowserRouter>
    );
  });
