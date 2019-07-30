import React from 'react';
import styled from 'styled-components';

import { mountWithTheme, checkStyleRules } from '../../test';
import theme from '../../theme';

import withTextfieldStyle from './index';

describe('Util: withSpacing', () => {
  const Textfield = styled.input`
    ${withTextfieldStyle};
  `;

  const setup = (hasError: boolean = false) =>
    mountWithTheme(<Textfield hasError={hasError} />);

  it('has the correct style rules', () => {
    const wrapper = setup();

    checkStyleRules(wrapper, {
      width: '100%',
      height: theme.dimensions.inputHeight,
      'background-color': theme.colors.whiteDenim,
      'border-radius': theme.borderRadius.input,
      border: `1px solid ${theme.colors.macyGrey}`,
      padding: '0 16px',
      outline: 'none',
      'box-shadow': 'none',
      'font-size': theme.fontSizes.body2,
      'letter-spacing': '0.1px'
    });
  });

  it('has the correct style rules on hover', () => {
    const wrapper = setup();

    checkStyleRules(
      wrapper,
      {
        'border-color': theme.colors.blueSmoke
      },
      {
        modifier: ':hover'
      }
    );
  });

  it('has the correct style rules on focus', () => {
    const wrapper = setup();

    checkStyleRules(
      wrapper,
      {
        'border-color': theme.colors.backToBlack
      },
      {
        modifier: ':focus'
      }
    );
  });

  it('has the correct style rules on disabled', () => {
    const wrapper = setup();

    checkStyleRules(
      wrapper,
      {
        color: theme.colors.macyGrey,
        'border-color': theme.colors.macyGrey
      },
      {
        modifier: ':disabled'
      }
    );
  });

  it('has the correct style rules when hasError is true', () => {
    const wrapper = setup(true);

    checkStyleRules(wrapper, {
      'border-color': theme.colors.redRedWine
    });
  });
});
