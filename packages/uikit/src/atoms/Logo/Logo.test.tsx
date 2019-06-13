import React from 'react';
import { shallow } from 'enzyme';

import Logo from './index';

describe('Logo', () => {
  describe('Text Logo', () => {
    it('renders correctly', () => {
      expect(shallow(<Logo />)).toMatchSnapshot();
    });

    it('renders correctly when inverted', () => {
      expect(shallow(<Logo invert />)).toMatchSnapshot();
    });

    it('renders correctly with a given width', () => {
      expect(shallow(<Logo width="500px" />)).toMatchSnapshot();
    });
  });

  describe('Cable Logo', () => {
    it('renders correctly', () => {
      expect(shallow(<Logo cable />)).toMatchSnapshot();
    });

    it('renders correctly when inverted', () => {
      expect(shallow(<Logo cable invert />)).toMatchSnapshot();
    });

    it('renders correctly with a given width', () => {
      expect(shallow(<Logo cable width="500px" />)).toMatchSnapshot();
    });
  });

  describe('Circle Logo', () => {
    it('renders correctly', () => {
      expect(shallow(<Logo circle />)).toMatchSnapshot();
    });

    it('renders correctly when inverted', () => {
      expect(shallow(<Logo circle invert />)).toMatchSnapshot();
    });

    it('renders correctly with a given width', () => {
      expect(shallow(<Logo circle width="500px" />)).toMatchSnapshot();
    });
  });
});
