import React from 'react';
import styled from 'styled-components';
import withShadow from './withShadow';
import { mount } from 'enzyme';

describe('Util: withShadow', () => {
  const Shadow = styled.div<any>`
    ${withShadow};
  `;

  it('adds shadow with depth 1', () => {
    expect(mount(<Shadow depth={1} />)).toHaveStyleRule(
      'box-shadow',
      '0 1px 3px 0 rgba(0,0,0,0.1)'
    );
  });

  it('adds shadow with depth 2', () => {
    expect(mount(<Shadow depth={2} />)).toHaveStyleRule(
      'box-shadow',
      '0 3px 6px 0 rgba(0,0,0,0.16), 0 3px 6px 0 rgba(0,0,0,0.23)'
    );
  });

  it('adds shadow with depth 3', () => {
    expect(mount(<Shadow depth={3} />)).toHaveStyleRule(
      'box-shadow',
      '0 10px 20px 0 rgba(0,0,0,0.19)'
    );
  });

  it('adds shadow with depth 4', () => {
    expect(mount(<Shadow depth={4} />)).toHaveStyleRule(
      'box-shadow',
      '0 14px 28px 0 rgba(0,0,0,0.25)'
    );
  });

  it('adds shadow with depth 5', () => {
    expect(mount(<Shadow depth={5} />)).toHaveStyleRule(
      'box-shadow',
      '0 19px 38px 0 rgba(0,0,0,0.3), 0 15px 12px 0 rgba(0,0,0,0.22)'
    );
  });
});
