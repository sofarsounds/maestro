import React from 'react';
import { mountWithTheme } from '../../test';

import Image from './index';

describe('<Image />', () => {
  describe('Default', () => {
    it('has the correct style attributes', () => {
      const img = mountWithTheme(<Image src="img.png" />);
      expect(img).toHaveStyleRule('border-radius', '2px');
      expect(img).toHaveStyleRule('width', '100%');
    });
  });

  describe('With Caption', () => {
    it('has the correct style attributes', () => {
      const img = mountWithTheme(<Image src="img.png" caption="A caption" />);
      expect(img).toHaveStyleRule('border-radius', '2px');
      expect(img).toHaveStyleRule('width', '100%');
    });

    it('displays the caption', () => {
      const img = mountWithTheme(<Image src="img.png" caption="A caption" />);
      expect(img.find('div').text()).toBe('A caption');
    });
  });
});
