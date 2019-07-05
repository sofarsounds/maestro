import React from 'react';
import styled from 'styled-components';
import withFlex from './withFlex';
import { mount } from 'enzyme';

describe('Util: withFlex', () => {
  const Flex = styled.div<any>`
    ${withFlex};
  `;

  it('adds a flex-direction property', () => {
    const wrapper = mount(<Flex flexDirection="row" />);
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('flex-direction', 'row');
  });

  it('adds a flex-wrap property', () => {
    const wrapper = mount(<Flex flexWrap="wrap" />);
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('flex-wrap', 'wrap');
  });

  it('adds a flex-flow property', () => {
    const wrapper = mount(<Flex flexFlow="row wrap" />);
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('flex-flow', 'row wrap');
  });

  it('adds a justify-content property', () => {
    const wrapper = mount(<Flex justifyContent="center" />);
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('justify-content', 'center');
  });

  it('adds a align-items property', () => {
    const wrapper = mount(<Flex alignItems="center" />);
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('align-items', 'center');
  });

  it('adds a align-content property', () => {
    const wrapper = mount(<Flex alignContent="start" />);
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('align-content', 'start');
  });
});
