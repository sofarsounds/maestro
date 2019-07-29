import React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';

import withSpacing from './index';

describe('Util: withSpacing', () => {
  const Spacer = styled.div`
    ${withSpacing};
  `;

  describe('non-responsive spacing', () => {
    it('generates margin', () => {
      expect(mount(<Spacer m={2} />)).toHaveStyleRule('margin', '8px');
      expect(mount(<Spacer mt={2} />)).toHaveStyleRule('margin-top', '8px');
      expect(mount(<Spacer mr={2} />)).toHaveStyleRule('margin-right', '8px');
      expect(mount(<Spacer mb={2} />)).toHaveStyleRule('margin-bottom', '8px');
      expect(mount(<Spacer ml={2} />)).toHaveStyleRule('margin-left', '8px');
    });

    it('generates padding', () => {
      expect(mount(<Spacer p={2} />)).toHaveStyleRule('padding', '8px');
      expect(mount(<Spacer pt={2} />)).toHaveStyleRule('padding-top', '8px');
      expect(mount(<Spacer pr={2} />)).toHaveStyleRule('padding-right', '8px');
      expect(mount(<Spacer pb={2} />)).toHaveStyleRule('padding-bottom', '8px');
      expect(mount(<Spacer pl={2} />)).toHaveStyleRule('padding-left', '8px');
    });
  });

  describe('responsive spacing', () => {
    it('generates margin', () => {
      const wrapper = mount(<Spacer m={[2, 4, 6]} />);

      expect(wrapper).toHaveStyleRule('margin', '8px');

      expect(wrapper).toHaveStyleRule('margin', '16px', {
        media: '(min-width:576px)'
      });

      expect(wrapper).toHaveStyleRule('margin', '24px', {
        media: '(min-width:768px)'
      });
    });

    it('generates padding', () => {
      const wrapper = mount(<Spacer p={[2, 4, 6]} />);

      expect(wrapper).toHaveStyleRule('padding', '8px');

      expect(wrapper).toHaveStyleRule('padding', '16px', {
        media: '(min-width:576px)'
      });

      expect(wrapper).toHaveStyleRule('padding', '24px', {
        media: '(min-width:768px)'
      });
    });
  });
});
