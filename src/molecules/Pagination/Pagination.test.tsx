import React from 'react';

import { mountWithTheme } from '../../test';
import Pagination from './index';
import Compact from './Compact';
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
});
