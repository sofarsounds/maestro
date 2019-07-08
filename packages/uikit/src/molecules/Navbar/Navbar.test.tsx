import React from 'react';
import { mountWithTheme, resize } from '../../test';

import Navbar from './index';
import ItemContainer from './ItemContainer';
import Item from './Item';
import Brand from './Brand';
import Hamburger from './CollapseIcon';
import CollapsibleWrapper from './Collapsible';

const setup = () =>
  mountWithTheme(
    <Navbar>
        <ItemContainer>
          <Item>Left Item</Item>
        </ItemContainer>
        <ItemContainer align="right">
          <Item>Right Item #1</Item>
          <Item>Right Item #2</Item>
        </ItemContainer>
    </Navbar>
  );

const wrapper = setup();

describe('<Navbar />', () => {
  describe('Desktop', () => {
    it('renders with a logo', () => {
      expect(wrapper.find(Brand)).toHaveLength(1);
    });

    it('renders the both item containers', () => {
      expect(wrapper.find(ItemContainer)).toHaveLength(2);
    });

    it('renders the left menu items', () => {
      const items = wrapper
        .find(ItemContainer)
        .at(0)
        .find(Item);

      expect(items).toHaveLength(1);
    });

    it('renders the right menu items', () => {
      const items = wrapper
        .find(ItemContainer)
        .at(1)
        .find(Item);

      expect(items).toHaveLength(2);
    });
  });

  describe('Mobile', () => {
    beforeAll(() => resize(400));

    it('renders with a logo', () => {
      expect(wrapper.find(Brand)).toHaveLength(1);
    });

    it('renders with an expand icon', () => {
      expect(wrapper.find(Hamburger)).toHaveLength(1);
    });

    it('hides the collapsable wrapper by default', () => {
      expect(wrapper.find(CollapsibleWrapper)).toHaveStyleRule(
        'display',
        'none'
      );
    });

    it('shows the collapsible wrapper when clicking the expand icon', () => {
      wrapper.find(Hamburger).simulate('click');
      expect(wrapper.find(CollapsibleWrapper)).toHaveStyleRule(
        'display',
        'flex'
      );
    });
  });
});
