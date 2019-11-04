import React from 'react';

import { mountWithTheme, getByTestId, checkStyleRules } from '../../test';
import theme from '../../theme';
import Radio, { Wrapper, Input, Label, Circle } from './index';

const mockOnChange = jest.fn();

const setup = (props: any, label?: string) =>
  mountWithTheme(<Radio {...props}>{label}</Radio>);

describe('<Radio />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without a label if none is defined', () => {
    const wrapper = setup({
      id: 'test1',
      value: '1',
      name: 'test1',
      onChange: mockOnChange,
      'data-qaid': 'nolabel'
    });

    expect(getByTestId(wrapper, 'nolabel-label')).toHaveLength(0);
  });

  it('renders with a label if one is given', () => {
    const wrapper = setup(
      {
        id: 'test1',
        value: '1',
        name: 'test1',
        onChange: mockOnChange,
        'data-qaid': 'withlabel'
      },
      'I have a label'
    );

    expect(getByTestId(wrapper, 'withlabel-label')).toHaveLength(1);
    expect(getByTestId(wrapper, 'withlabel-label').text()).toEqual(
      'I have a label'
    );
  });

  describe('<Wrapper />', () => {
    it('has the correct style attributes', () => {
      checkStyleRules(mountWithTheme(<Wrapper />), {
        width: theme.dimensions.radioBox,
        height: theme.dimensions.radioBox,
        'border-radius': '100%',
        display: 'inline-block'
      });
    });
  });

  describe('<Input />', () => {
    it('has the correct style attributes', () => {
      checkStyleRules(mountWithTheme(<Input />), {
        position: 'absolute',
        top: 'auto',
        overflow: 'hidden',
        clip: 'rect(1px,1px,1px,1px)',
        width: '1px',
        height: '1px',
        'white-space': 'nowrap'
      });
    });
  });

  describe('<Circle />', () => {
    it('has the correct style attributes', () => {
      checkStyleRules(mountWithTheme(<Circle />), {
        'border-radius': '100%',
        display: 'block',
        width: theme.dimensions.radioBox,
        height: theme.dimensions.radioBox,
        transition: 'all 0.1s ease-out'
      });

      checkStyleRules(
        mountWithTheme(<Circle />),
        {
          border: '2px solid rgba(0,0,0,0.75)',
          'border-radius': '100%',
          'background-color': 'transparent',
          display: 'block',
          'box-sizing': 'border-box',
          width: theme.dimensions.radioBox,
          height: theme.dimensions.radioBox,
          'vertical-align': 'top',
          cursor: 'pointer',
          transition: 'all 0.1s ease-out'
        },
        { modifier: '::before' }
      );
    });

    it('has the correct style attributes when hovered', () => {
      checkStyleRules(
        mountWithTheme(<Circle />),
        {
          'box-shadow':
            '0px 0px 0px 8px rgba(30,30,30,0.1), inset 0 0 0 10px rgba(30,30,30,0.1)'
        },
        { modifier: ':hover' }
      );
    });

    it('has the correct style rules when checked', () => {
      checkStyleRules(
        mountWithTheme(
          <>
            <Input onChange={mockOnChange} checked />
            <Circle />
          </>
        ),
        {
          'background-color': theme.colors.primary,
          'border-color': theme.colors.primary,
          'box-shadow': `inset 0 0 0 3px ${theme.colors.whiteDenim}`
        },
        { modifier: `:checked + ${Circle}::before` }
      );
    });

    it('has the correct style rules when checked and hovered', () => {
      checkStyleRules(
        mountWithTheme(
          <>
            <Input onChange={mockOnChange} checked />
            <Circle />
          </>
        ),
        {
          'box-shadow': '0px 0px 0px 8px rgba(3,152,66,0.1)'
        },
        { modifier: `:checked + ${Circle}:hover` }
      );
    });

    it('has the correct style rules when disabled', () => {
      checkStyleRules(
        mountWithTheme(
          <>
            <Input disabled />
            <Circle />
          </>
        ),
        {
          'border-color': theme.colors.macyGrey,
          'background-color': 'transparent',
          cursor: 'not-allowed'
        },
        { modifier: `:disabled + ${Circle}::before` }
      );
    });

    it('has the correct style rules when disabled and hovered', () => {
      checkStyleRules(
        mountWithTheme(
          <>
            <Input disabled />
            <Circle />
          </>
        ),
        {
          'box-shadow': 'none'
        },
        { modifier: `:disabled + ${Circle}:hover` }
      );
    });
  });

  describe('<Label />', () => {
    it('has the correct style attributes', () => {
      checkStyleRules(mountWithTheme(<Label>I am a label</Label>), {
        'margin-left': '10px'
      });
    });

    it('has the correct style attributes when disabled', () => {
      checkStyleRules(mountWithTheme(<Label disabled>I am a label</Label>), {
        'margin-left': '10px',
        color: theme.colors.macyGrey
      });
    });
  });
});
