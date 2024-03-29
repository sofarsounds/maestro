import React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import withTypography from './index';

const Typography = styled.h1<any>`
  color: yellow;
  ${withTypography};
`;

const generateTestCase = (
  cssProperty: string,
  cssVariants: string[] | boolean[] | number[],
  propVariant: string
) => {
  cssVariants.forEach((cssValue: any) => {
    let dynamicProp = { [propVariant]: cssValue };
    let wrapper = mount(<Typography {...dynamicProp} />);
    expect(wrapper).toHaveStyleRule(cssProperty, cssValue);
  });
};

describe('Util: withTypography', () => {
  it('adds a color property to element', () => {
    expect(mount(<Typography color={'red'} />)).toHaveStyleRule('color', 'red');
  });

  it('adds an aligned property to element', () => {
    expect(mount(<Typography align={'center'} />)).toHaveStyleRule(
      'color',
      'yellow'
    );

    expect(mount(<Typography align={'center'} />)).toHaveStyleRule(
      'text-align',
      'center'
    );
  });

  it('adds align properties to element', () => {
    generateTestCase(
      'text-align',
      ['center', 'left', 'right', 'none'],
      'align'
    );
  });

  it('adds an underline to the element', () => {
    expect(mount(<Typography underline />)).toHaveStyleRule(
      'text-decoration',
      'underline'
    );
  });

  it('adds a line height property to element', () => {
    generateTestCase('line-height', ['12', '24'], 'lineHeight');
  });

  it('adds font-weigh property to element', () => {
    generateTestCase(
      'font-weight',
      ['lighter', 'regular', 'bold'],
      'fontWeight'
    );
  });
});
