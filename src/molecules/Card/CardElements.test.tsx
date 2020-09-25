import React from 'react';
import { mountWithTheme } from '../../test';

import { Title, Footer } from './CardElements';

describe('Card Elements', () => {
  describe('<CardTitle />', () => {
    it('has the correct style rules', () => {
      const wrapper = mountWithTheme(<Title>A title</Title>);
      expect(wrapper).toHaveStyleRule('margin-bottom', '16px');
    });
  });

  describe('<CardFooter />', () => {
    it('has the correct style rules', () => {
      const wrapper = mountWithTheme(<Footer />);
      expect(wrapper).toHaveStyleRule('margin-top', '32px');
    });
  });
});
