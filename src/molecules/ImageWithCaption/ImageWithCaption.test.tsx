import React from 'react';
import { mountWithTheme } from '../../test';
import { Caption } from '../../atoms/Typography';
import Image from '../../atoms/Image';

import ImageWithCaption from './index';

describe('<ImageWithCaption />', () => {
  describe('Default', () => {
    it('has the correct style attributes', () => {
      const img = mountWithTheme(
        <ImageWithCaption src="img.png" caption="A caption" />
      );
      expect(img.find(Image)).toHaveStyleRule('border-radius', '2px');
      expect(img.find(Image)).toHaveStyleRule('width', '100%');
    });

    it('displays the caption', () => {
      const img = mountWithTheme(
        <ImageWithCaption src="img.png" caption="A caption" />
      );
      expect(img.find(Caption).text()).toBe('A caption');
    });
  });
});
