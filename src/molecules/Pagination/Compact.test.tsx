import React from 'react';

import { mountWithTheme } from '../../test';
import Compact from './Compact';
import Pages from './Pages';
import Ellipsis from './Ellipsis';
import PageBubble from './PageBubble';

const mockClick = jest.fn();

const setup = (currentPage: number, totalPages: number) =>
  mountWithTheme(
    <Compact
      currentPage={currentPage}
      totalPages={totalPages}
      onClickPage={mockClick}
    />
  );

describe('Pagination <Compact />', () => {
  it('it renders correctly when the first page is active', () => {
    expect(setup(1, 15)).toMatchSnapshot();
  });

  it('it renders correctly when a middle page is active', () => {
    expect(setup(6, 15)).toMatchSnapshot();
  });

  it('it renders correctly when the last page is active', () => {
    expect(setup(15, 15)).toMatchSnapshot();
  });

  it('it renders the correct elements when the first page is active', () => {
    const wrapper = setup(1, 10).find(Compact);

    expect(wrapper.childAt(0).is(Pages)).toBeTruthy();
    expect(wrapper.find(Pages).find(PageBubble)).toHaveLength(5);

    expect(wrapper.childAt(1).is(Ellipsis)).toBeTruthy();

    expect(wrapper.childAt(2).is(PageBubble)).toBeTruthy();
  });

  it('it renders the correct elements when the middle page is active', () => {
    const wrapper = setup(5, 10).find(Compact);

    expect(wrapper.childAt(0).is(PageBubble)).toBeTruthy();

    expect(wrapper.childAt(1).is(Ellipsis)).toBeTruthy();

    expect(wrapper.childAt(2).is(Pages)).toBeTruthy();
    expect(wrapper.find(Pages).find(PageBubble)).toHaveLength(3);

    expect(wrapper.childAt(3).is(Ellipsis)).toBeTruthy();

    expect(wrapper.childAt(4).is(PageBubble)).toBeTruthy();
  });

  it('it renders the correct elements when the last page is active', () => {
    const wrapper = setup(10, 10).find(Compact);

    expect(wrapper.childAt(0).is(PageBubble)).toBeTruthy();

    expect(wrapper.childAt(1).is(Ellipsis)).toBeTruthy();

    expect(wrapper.childAt(2).is(Pages)).toBeTruthy();
    expect(wrapper.find(Pages).find(PageBubble)).toHaveLength(5);
  });
});
