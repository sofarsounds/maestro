import React from 'react';
import styled from 'styled-components';
import withNavbarPadding from './withNavbarPadding';
import { mount } from 'enzyme';

describe('Util: withNavbarPadding', () => {
  const HasPadding = styled.div<any>`
    ${withNavbarPadding};
  `;

  describe('Add default top padding to page', () => {
    it('adds the right padding to the top on xs devices', () => {
      expect(mount(<HasPadding />)).toHaveStyleRule(
        'padding-top',
        'calc(62px + 60px)'
      );
    });

    it('adds the right padding to the top on md+ devices', () => {
      expect(mount(<HasPadding />)).toHaveStyleRule(
        'padding-top',
        'calc(74px + 60px)',
        {
          media: '(min-width:768px)'
        }
      );
    });

    it('adds the right padding to the top on lg+ devices', () => {
      expect(mount(<HasPadding />)).toHaveStyleRule(
        'padding-top',
        'calc(84px + 60px)',
        {
          media: '(min-width:992px)'
        }
      );
    });
  });

  describe('Add navbar height as padding to page', () => {
    it('adds the right padding to the top on xs devices', () => {
      expect(mount(<HasPadding stickToNavbar />)).toHaveStyleRule(
        'padding-top',
        '62px'
      );
    });

    it('adds the right padding to the top on md+ devices', () => {
      expect(mount(<HasPadding stickToNavbar />)).toHaveStyleRule(
        'padding-top',
        '74px',
        {
          media: '(min-width:768px)'
        }
      );
    });

    it('adds the right padding to the top on lg+ devices', () => {
      expect(mount(<HasPadding stickToNavbar />)).toHaveStyleRule(
        'padding-top',
        '84px',
        {
          media: '(min-width:992px)'
        }
      );
    });
  });
});
