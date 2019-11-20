import React from 'react';
import { mountWithTheme } from '../../test';

import { Title, H4 } from '../../atoms/Typography';
import { PrimaryButton } from '../../atoms/Button';
import HeroImage, { Wrapper } from './index';

const imgUrl =
  'https://www.stratatiles.co.uk/wp-content/uploads/2015/04/102.jpg';

describe('<HeroImage />', () => {
  it('renders correctly with default height', () => {
    const wrapper = mountWithTheme(
      <HeroImage title="I am a title" imageURL={imgUrl} />
    );

    expect(wrapper.find(Wrapper)).toHaveStyleRule('height', '300px');
  });

  it('renders correctly with custom height', () => {
    const wrapper = mountWithTheme(
      <HeroImage height="500px" title="I am a title" imageURL={imgUrl} />
    );

    expect(wrapper.find(Wrapper)).toHaveStyleRule('height', '500px');
  });

  it('renders correctly with title', () => {
    const wrapper = mountWithTheme(
      <HeroImage title="I am a title" imageURL={imgUrl} />
    );

    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(H4)).toHaveLength(0);
  });

  it('renders correctly with subtitle + subtitle', () => {
    const wrapper = mountWithTheme(
      <HeroImage
        title="I am a title"
        subtitle="I am a subtitle"
        imageURL={imgUrl}
      />
    );

    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(H4)).toHaveLength(1);
  });

  it('renders correctly with custom action', () => {
    const wrapper = mountWithTheme(
      <HeroImage
        title="I am a title"
        subtitle="I am a subtitle"
        imageURL={imgUrl}
      >
        <PrimaryButton>An Action</PrimaryButton>
      </HeroImage>
    );

    expect(wrapper.find(PrimaryButton)).toHaveLength(1);
  });

  describe('When imageURL prop is set', () => {
    it('renders the correct background image', () => {
      const wrapper = mountWithTheme(
        <HeroImage title="I am a title" imageURL={imgUrl} />
      );

      expect(wrapper.find(Wrapper)).toHaveStyleRule(
        'background-image',
        `url(${imgUrl})`
      );
    });
  });

  describe('When images prop is set', () => {
    it('renders the correct background image url for each screen size', () => {
      const images = {
        xs: 'https://www.randomimage.com/xs',
        sm: 'https://www.randomimage.com/sm',
        md: 'https://www.randomimage.com/md',
        lg: 'https://www.randomimage.com/lg',
        xl: 'https://www.randomimage.com/xl'
      };
      const wrapper = mountWithTheme(
        <HeroImage title="I am a title" images={images} />
      );

      expect(wrapper).toHaveStyleRule('background-image', `url(${images.xs})`, {
        media: '(min-width:0px)'
      });

      expect(wrapper).toHaveStyleRule('background-image', `url(${images.sm})`, {
        media: '(min-width:576px)'
      });

      expect(wrapper).toHaveStyleRule('background-image', `url(${images.md})`, {
        media: '(min-width:768px)'
      });

      expect(wrapper).toHaveStyleRule('background-image', `url(${images.lg})`, {
        media: '(min-width:992px)'
      });

      expect(wrapper).toHaveStyleRule('background-image', `url(${images.xl})`, {
        media: '(min-width:1200px)'
      });
    });

    it('renders the correct background image url when some size urls are missing', () => {
      const images = {
        sm: 'https://www.randomimage.com/sm',
        lg: 'https://www.randomimage.com/lg'
      };
      const wrapper = mountWithTheme(
        <HeroImage title="I am a title" images={images} />
      );

      expect(wrapper).toHaveStyleRule('background-image', `url(${images.sm})`, {
        media: '(min-width:0px)'
      });

      expect(wrapper).toHaveStyleRule('background-image', `url(${images.sm})`, {
        media: '(min-width:576px)'
      });

      expect(wrapper).toHaveStyleRule('background-image', `url(${images.lg})`, {
        media: '(min-width:992px)'
      });
    });
  });
});
