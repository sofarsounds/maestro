import React from 'react';
import { mountWithTheme } from '../../test';
import theme from '../../theme';
import Subnav from './index';

describe('<Subnav />', () => {
  describe('<Container />', () => {
    const setup = mountWithTheme(<Subnav.Container />);

    it('has the correct style attributes', () => {
      expect(setup).toHaveStyleRule('overflow-x', 'auto');
      expect(setup).toHaveStyleRule('-ms-overflow-style', 'none');
      expect(setup).toHaveStyleRule('text-align', 'center');
    });
  });

  describe('<Link />', () => {
    it('has the correct style attributes', () => {
      const link = mountWithTheme(
        <Subnav.Link as="a" to="/">
          A Link
        </Subnav.Link>
      );

      expect(link).toHaveStyleRule('display', 'inline-block');
      expect(link).toHaveStyleRule('margin-right', '40px');
      expect(link).toHaveStyleRule('padding-bottom', '24px');
      expect(link).toHaveStyleRule('color', theme.colours.blueSmoke);
      expect(link).toHaveStyleRule('position', 'relative');
    });

    it('has the correct style attributes when hovered', () => {
      const link = mountWithTheme(
        <Subnav.Link as="a" to="/">
          A Link
        </Subnav.Link>
      );

      expect(link).toHaveStyleRule('color', theme.colours.primary, {
        modifier: ':hover'
      });
    });

    it('has the correct style attributes when active', () => {
      const link = mountWithTheme(
        <Subnav.Link as="a" to="/" active>
          A Link
        </Subnav.Link>
      );

      expect(link).toHaveStyleRule('color', theme.colours.backToBlack);
      expect(link).toHaveStyleRule(
        'border-bottom',
        `2px solid ${theme.colours.primary}`,
        {
          modifier: ':before'
        }
      );

      expect(link).toHaveStyleRule('width', '26px', {
        modifier: ':before'
      });

      expect(link).toHaveStyleRule('bottom', '15px', {
        modifier: ':before'
      });
    });
  });
});
