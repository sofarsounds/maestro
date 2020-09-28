import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';

import { Card } from '../../src';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('With Image', () => {
    const inverted = boolean('Inverted', false);
    const reverseRow = boolean('Reverse Row', false);
    return (
      <>
        <h1>Card w/ Image</h1>
        <BrowserRouter>
          <div
            style={{
              width: '100%',
              maxWidth: '950px',
              background: inverted ? '#000' : '#fff'
            }}
          >
            <Card linkTo="https://www.google.com" inverted={inverted} reverseRow={reverseRow}>
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
                <Card.Footer>
                  {text('Footer', 'Customisable Footer')}
                </Card.Footer>
              </Card.Content>
            </Card>
          </div>
        </BrowserRouter>
      </>
    );
  });
