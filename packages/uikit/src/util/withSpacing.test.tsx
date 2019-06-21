import React from 'react';
import styled from 'styled-components';
import withSpacing from './withSpacing';
import { mount } from 'enzyme';

describe('Util: withSpacing', () => {
  describe('generateSpace', () => {
    const Spacer = styled.div`
      ${withSpacing};
    `;

    it('generates spacing properties for non-responsive spacing', () => {
      const wrapper = mount(<Spacer mt={2} />);
      expect(wrapper).toHaveStyleRule('margin-top', '8px');
    });

    it('generates spacing properties for responsive spacing', () => {
      const wrapper = mount(<Spacer m={[2, 4, 6]} />);

      expect(wrapper).toHaveStyleRule('margin', '8px');

      expect(wrapper).toHaveStyleRule('margin', '16px', {
        media: '(min-width:576px)'
      });

      expect(wrapper).toHaveStyleRule('margin', '24px', {
        media: '(min-width:768px)'
      });
    });
  });
});
