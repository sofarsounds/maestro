import React from 'react';

import { mountWithTheme } from '../../test';
import Pages from './Pages';
import PageBubble from './PageBubble';

const mockClick = jest.fn();

const setup = (
  displayPages: number,
  currentPage: number,
  enlargement: number = 1
) => {
  return mountWithTheme(
    <Pages
      displayPages={displayPages}
      currentPage={currentPage}
      enlargement={enlargement}
      onClick={mockClick}
    />
  );
};

describe('Pagination <Pages />', () => {
  beforeEach(() => jest.clearAllMocks());

  it('renders correctly', () => {
    const wrapper = setup(5, 2);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders the correct page numbers', () => {
    const wrapper = setup(5, 2);

    const bubbles = wrapper.find(PageBubble);

    expect(bubbles).toHaveLength(5);

    expect(bubbles.get(0).props.page).toBe(1);
    expect(bubbles.get(1).props.page).toBe(2);
    expect(bubbles.get(2).props.page).toBe(3);
    expect(bubbles.get(3).props.page).toBe(4);
    expect(bubbles.get(4).props.page).toBe(5);
  });

  it('renders the correct page numbers with given enlargemenet', () => {
    const wrapper = setup(3, 2, 3);

    const bubbles = wrapper.find(PageBubble);

    expect(bubbles).toHaveLength(3);

    expect(bubbles.get(0).props.page).toBe(3);
    expect(bubbles.get(1).props.page).toBe(4);
    expect(bubbles.get(2).props.page).toBe(5);
  });

  it('marks the correct page as active', () => {
    const wrapper = setup(3, 2);
    const bubbles = wrapper.find(PageBubble);

    expect(bubbles.get(1).props.isActive).toBeTruthy();
  });

  it('lets the user click on a page bubble', () => {
    const wrapper = setup(3, 2);

    wrapper
      .find(PageBubble)
      .first()
      .simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });
});
