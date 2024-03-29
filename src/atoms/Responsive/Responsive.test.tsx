import React from 'react';
import { mount } from 'enzyme';

import { resize } from '../../test';
import { breakPoints } from '../../theme';

import Responsive from './index';

const testText = 'i am amazing';

const generateTestCase = (componentProps: any, hiddenOnBreakPoints: any) => {
  const visibility = Object.keys(componentProps)[0];
  const checkingBreakpoint = componentProps[visibility];

  const testCaseTitle = `${visibility} ${checkingBreakpoint}`;

  it(testCaseTitle, () => {
    const minWidth = breakPoints[checkingBreakpoint];
    resize(minWidth);

    const wrapper = mount(
      <Responsive {...componentProps}>{testText}</Responsive>
    );

    Object.keys(breakPoints).map((breakpoint: string) => {
      resize(breakPoints[breakpoint]);
      wrapper.update();

      const expected =
        hiddenOnBreakPoints.indexOf(breakpoint) > -1 ? null : testText;
      expect(wrapper.html()).toBe(expected);
    });
  });
};

describe('Responsive', () => {
  describe('hide on exact screen sizes', () => {
    generateTestCase({ hide: 'xs' }, ['xs']);
    generateTestCase({ hide: 'sm' }, ['sm']);
    generateTestCase({ hide: 'md' }, ['md']);
    generateTestCase({ hide: 'lg' }, ['lg']);
    generateTestCase({ hide: 'xl' }, ['xl']);
  });

  describe('hide on screen size and up', () => {
    generateTestCase({ hideUp: 'xs' }, ['xs', 'sm', 'md', 'lg', 'xl']);
    generateTestCase({ hideUp: 'sm' }, ['sm', 'md', 'lg', 'xl']);
    generateTestCase({ hideUp: 'md' }, ['md', 'lg', 'xl']);
    generateTestCase({ hideUp: 'lg' }, ['lg', 'xl']);
    generateTestCase({ hideUp: 'xl' }, ['xl']);
  });

  describe('show on exact screen sizes', () => {
    generateTestCase({ show: 'xs' }, ['sm', 'md', 'lg', 'xl']);
    generateTestCase({ show: 'sm' }, ['xs', 'md', 'lg', 'xl']);
    generateTestCase({ show: 'md' }, ['xs', 'sm', 'lg', 'xl']);
    generateTestCase({ show: 'lg' }, ['xs', 'sm', 'md', 'xl']);
    generateTestCase({ show: 'xl' }, ['xs', 'sm', 'md', 'lg']);
  });

  describe('show on exact screen size and up', () => {
    generateTestCase({ showUp: 'xs' }, []);
    generateTestCase({ showUp: 'sm' }, ['xs']);
    generateTestCase({ showUp: 'md' }, ['xs', 'sm']);
    generateTestCase({ showUp: 'lg' }, ['xs', 'sm', 'md']);
    generateTestCase({ showUp: 'xl' }, ['xs', 'sm', 'md', 'lg']);
  });
});
