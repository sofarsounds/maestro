import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';

import HeroImage from './index'
import { PrimaryButton } from '../../atoms/Button'

storiesOf('Hero Image', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <HeroImage
      height={text('Height', '400px')}
      imageURL={text(
        'Image URL',
        'https://www.stratatiles.co.uk/wp-content/uploads/2015/04/102.jpg'
      )}
      title={text('Title', 'A Hero Image')}
      subtitle={text('Subtitle', 'With a subtitle')}
      parallax={boolean('Parallax', false)}
    />
  ))
  .add('With Action', () => (
    <HeroImage
      height={text('Height', '400px')}
      imageURL={text(
        'Image URL',
        'https://www.stratatiles.co.uk/wp-content/uploads/2015/04/102.jpg'
      )}
      title={text('Title', 'A Hero Image')}
      subtitle={text('Subtitle', 'With a subtitle')}
    >
      <PrimaryButton>An Action</PrimaryButton>
    </HeroImage>
  ));
