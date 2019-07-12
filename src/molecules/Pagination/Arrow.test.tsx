import React from 'react';

import { mountWithTheme } from '../../test';
import { ArrowLeft, ArrowRight } from './Arrow';

const mockClick = jest.fn();

describe('Pagination Arrow', () => {
  beforeEach(() => jest.clearAllMocks());

  describe('<ArrowLeft />', () => {
    it('renders correctly', () => {
      expect(
        mountWithTheme(<ArrowLeft onClick={mockClick} />)
      ).toMatchSnapshot();
    });

    it('renders correctly when disabled', () => {
      expect(
        mountWithTheme(<ArrowLeft onClick={mockClick} disabled />)
      ).toMatchSnapshot();
    });

    it('is clickable', () => {
      const wrapper = mountWithTheme(<ArrowLeft onClick={mockClick} />);
      wrapper.simulate('click');
      expect(mockClick).toHaveBeenCalled();
    });

    it('is not clickable when disabled', () => {
      const wrapper = mountWithTheme(
        <ArrowLeft onClick={mockClick} disabled />
      );
      wrapper.simulate('click');
      expect(mockClick).not.toHaveBeenCalled();
    });
  });

  describe('<ArrowRight />', () => {
    it('renders correctly', () => {
      expect(
        mountWithTheme(<ArrowRight onClick={mockClick} />)
      ).toMatchSnapshot();
    });

    it('renders correctly when disabled', () => {
      expect(
        mountWithTheme(<ArrowRight onClick={mockClick} disabled />)
      ).toMatchSnapshot();
    });

    it('is clickable', () => {
      const wrapper = mountWithTheme(<ArrowRight onClick={mockClick} />);
      wrapper.simulate('click');
      expect(mockClick).toHaveBeenCalled();
    });

    it('is not clickable when disabled', () => {
      const wrapper = mountWithTheme(
        <ArrowRight onClick={mockClick} disabled />
      );
      wrapper.simulate('click');
      expect(mockClick).not.toHaveBeenCalled();
    });
  });
});
