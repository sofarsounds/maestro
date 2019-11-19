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

  describe('When imageURL is a string', () => {
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

  describe('When imageURL is an array', () => {
    it('renders the correct background image url for each screen size', () => {
      const imageURL = [
        'https://www.randomimage.com/xs',
        'https://www.randomimage.com/sm',
        'https://www.randomimage.com/md',
        'https://www.randomimage.com/lg'
      ];
      const wrapper = mountWithTheme(
        <HeroImage title="I am a title" imageURL={imageURL} />
      );

      expect(wrapper).toHaveStyleRule(
        'background-image',
        `url(${imageURL[0]})`,
        {
          media: '(min-width:0px)'
        }
      );

      expect(wrapper).toHaveStyleRule(
        'background-image',
        `url(${imageURL[1]})`,
        {
          media: '(min-width:576px)'
        }
      );

      expect(wrapper).toHaveStyleRule(
        'background-image',
        `url(${imageURL[2]})`,
        {
          media: '(min-width:768px)'
        }
      );

      expect(wrapper).toHaveStyleRule(
        'background-image',
        `url(${imageURL[3]})`,
        {
          media: '(min-width:992px)'
        }
      );
    });
  });
});
