import React from 'react';

import { mountWithTheme } from '../../test';
import Pagination from './index';
import Compact from './Compact';
import { ArrowLeft, ArrowRight } from './Arrow';
import PageBubble from './PageBubble';

const mockClick = jest.fn();

const setup = (currentPage: number, totalRecords: number, perPage?: number) =>
  mountWithTheme(
    <Pagination
      currentPage={currentPage}
      totalRecords={totalRecords}
      perPage={perPage}
      onPageChange={mockClick}
    />
  );

const isPageActive = (wrapper: any, position: number) =>
  expect(
    wrapper
      .find(PageBubble)
      .at(position)
      .props().isActive
  ).toBeTruthy();

describe('<Pagination />', () => {
  beforeEach(() => jest.clearAllMocks());

  it('renders correctly', () => {
    expect(setup(3, 80)).toMatchSnapshot();
  });

  describe('Number of Pages calculation', () => {
    it('it calculates the number of pages with default settings', () => {
      const wrapper = setup(1, 80);

      expect(
        wrapper
          .find(PageBubble)
          .last()
          .props().page
      ).toBe(10);
    });

    it('it calculates the number of pages with custom perPage', () => {
      const wrapper = setup(1, 80, 5);

      expect(
        wrapper
          .find(PageBubble)
          .last()
          .props().page
      ).toBe(16);
    });
  });

  it("does not render <Compact /> if there's less than 5 pages", () => {
    const wrapper = setup(1, 5);
    expect(wrapper.find(Compact)).toHaveLength(0);
  });

  it("renders <Compact /> if there's more than 5 pages", () => {
    const wrapper = setup(1, 400);
    expect(wrapper.find(Compact)).toHaveLength(1);
  });

  it('triggers a callback when the user changes the page', () => {
    const wrapper = setup(1, 80);

    wrapper
      .find(PageBubble)
      .at(2)
      .simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });

  it('updates the current active page when the users clicks a page bubble', () => {
    const wrapper = setup(1, 80);

    isPageActive(wrapper, 0);

    wrapper
      .find(PageBubble)
      .at(2)
      .simulate('click');

    isPageActive(wrapper, 2);
  });

  describe('Clicking the Previous Arrow', () => {
    it('does not let the user click the previous arrow when on page 1', () => {
      const wrapper = setup(1, 80);

      wrapper.find(ArrowLeft).simulate('click');

      expect(mockClick).not.toHaveBeenCalled();
    });

    it('clicking the previous arrow changes to the previous page', () => {
      const wrapper = setup(2, 80);

      isPageActive(wrapper, 1);
      wrapper.find(ArrowLeft).simulate('click');
      isPageActive(wrapper, 0);
    });
  });

  describe('Clicking the Next Arrow', () => {
    it('does not let the user click the next arrow when on the last page', () => {
      const wrapper = setup(10, 80);

      wrapper.find(ArrowRight).simulate('click');

      expect(mockClick).not.toHaveBeenCalled();
    });

    it('clicking the next arrow changes to the next page', () => {
      const wrapper = setup(1, 80);

      isPageActive(wrapper, 0);
      wrapper.find(ArrowRight).simulate('click');
      isPageActive(wrapper, 1);
    });
  });

  it('updates the current active page when the users clicks ', () => {
    const wrapper = setup(1, 80);

    isPageActive(wrapper, 0);

    wrapper
      .find(PageBubble)
      .at(2)
      .simulate('click');

    isPageActive(wrapper, 2);
  });
});
