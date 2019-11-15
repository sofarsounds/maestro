import React from 'react';
import { mountWithTheme } from '../../test';

import Navbar from './NavbarContainer';

describe('Navbar', () => {
  describe('<Navbar />', () => {
    it('has the correct style rules', () => {
      const wrapper = mountWithTheme(<Navbar>children</Navbar>);

      expect(wrapper).toHaveStyleRule('height', '62px');
      expect(wrapper).toHaveStyleRule('background', '#000');
      expect(wrapper).toHaveStyleRule('height', '74px', {
        media: '(min-width:768px)'
      });
      expect(wrapper).toHaveStyleRule('height', '84px', {
        media: '(min-width:992px)'
      });
    });
  });

  describe('<Navbar position="fixed" />', () => {
    it('has the correct style rules', () => {
      const wrapper = mountWithTheme(
        <Navbar position="fixed">children</Navbar>
      );

      expect(wrapper).toHaveStyleRule('height', '62px');
      expect(wrapper).toHaveStyleRule('background', '#000');
      expect(wrapper).toHaveStyleRule('position', 'fixed');
      expect(wrapper).toHaveStyleRule('top', '0');
      expect(wrapper).toHaveStyleRule('left', '0');
      expect(wrapper).toHaveStyleRule('right', '0');

      expect(wrapper).toHaveStyleRule('height', '74px', {
        media: '(min-width:768px)'
      });
      expect(wrapper).toHaveStyleRule('height', '84px', {
        media: '(min-width:992px)'
      });
    });
  });

  describe('<Navbar transparent={true} />', () => {
    it('has the correct style rules', () => {
      const wrapper = mountWithTheme(
        <Navbar transparent={true}>children</Navbar>
      );

      expect(wrapper).toHaveStyleRule('height', '62px');
      expect(wrapper).toHaveStyleRule('background', '#000');

      expect(wrapper).toHaveStyleRule('height', '74px', {
        media: '(min-width:768px)'
      });
      expect(wrapper).toHaveStyleRule('background', 'transparent', {
        media: '(min-width:768px)'
      });
      expect(wrapper).toHaveStyleRule('height', '84px', {
        media: '(min-width:992px)'
      });
    });
  });

  describe('<Navbar position="absolute" />', () => {
    it('has the correct style rules', () => {
      const wrapper = mountWithTheme(
        <Navbar position="absolute">children</Navbar>
      );

      expect(wrapper).toHaveStyleRule('height', '62px');
      expect(wrapper).toHaveStyleRule('background', '#000');
      expect(wrapper).toHaveStyleRule('position', 'absolute');

      expect(wrapper).toHaveStyleRule('height', '74px', {
        media: '(min-width:768px)'
      });
      expect(wrapper).toHaveStyleRule('height', '84px', {
        media: '(min-width:992px)'
      });
    });
  });
});
