import React from 'react';
import { mountWithTheme } from '../../test';

import { Title, Footer } from './CardElements';

describe('Card Elements', () => {
  describe('<CardTitle />', () => {
    const wrapper = mountWithTheme(<Title />);

    it('has the correct style rules', () => {
      expect(wrapper).toHaveStyleRule('margin-bottom', '16px');
    });
  });

  describe('<CardFooter />', () => {
    const wrapper = mountWithTheme(<Footer />);

    it('has the correct style rules', () => {
      expect(wrapper).toHaveStyleRule('margin-top', '32px');
    });
  });
});
