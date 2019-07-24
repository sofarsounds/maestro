import React from 'react';
import { mountWithTheme } from '../../test';

import theme from '../../theme';
import Badge from './index';

describe('<Badge />', () => {
  const setup = (props: any) => mountWithTheme(<Badge {...props}>1</Badge>);

  describe('Default Badge', () => {
    it('renders the badge correctly', () => {
      const wrapper = setup({});

      expect(wrapper).toHaveStyleRule('width', '36px');
      expect(wrapper).toHaveStyleRule('height', '36px');
      expect(wrapper).toHaveStyleRule('border-radius', '100%');

      expect(wrapper).toMatchSnapshot();
    });

    it('is clickable', () => {
      const wrapper = setup({ clickable: true });

      expect(wrapper).toHaveStyleRule('cursor', 'pointer');
      expect(wrapper).toHaveStyleRule(
        'background-color',
        'rgba(17,17,17,0.1)',
        {
          modifier: ':hover'
        }
      );
    });
  });

  describe('Primary Badge', () => {
    it('renders the badge correctly', () => {
      const wrapper = setup({ colour: 'primary' });

      expect(wrapper).toHaveStyleRule(
        'background-color',
        theme.colours.primary
      );
      expect(wrapper).toHaveStyleRule('color', theme.colours.whiteDenim);
      expect(wrapper).toHaveStyleRule('font-weight', '600');

      expect(wrapper).toMatchSnapshot();
    });

    it('is clickable', () => {
      const wrapper = setup({ colour: 'primary', clickable: true });

      expect(wrapper).toHaveStyleRule(
        'background-color',
        theme.colours.green800,
        {
          modifier: ':hover'
        }
      );
    });
  });
});
