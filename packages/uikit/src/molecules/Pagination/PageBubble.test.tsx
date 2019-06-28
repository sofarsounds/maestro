import React from 'react';

import { mountWithTheme } from '../../test';
import PageBubble from './PageBubble';

const mockClick = jest.fn();

const setup = (currentPage: number, page: number) => {
  return mountWithTheme(
    <PageBubble
      isActive={page === currentPage}
      page={page}
      onClick={mockClick}
    />
  );
};

describe('Pagination <PageBubble />', () => {
  beforeEach(() => jest.clearAllMocks());

  it('renders correctly', () => {
    expect(setup(5, 2)).toMatchSnapshot();
  });

  it('renders correctly when active', () => {
    expect(setup(5, 5)).toMatchSnapshot();
  });

  it('is clickable when it is not the active page', () => {
    const wrapper = setup(5, 2);

    wrapper.simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });

  it('is not clickable when it is the active page', () => {
    const wrapper = setup(5, 5);

    wrapper.simulate('click');
    expect(mockClick).not.toHaveBeenCalled();
  });
});
