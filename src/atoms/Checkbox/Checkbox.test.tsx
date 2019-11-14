import React from 'react';

import { mountWithTheme, getByTestId, checkStyleRules } from '../../test';
import theme from '../../theme';
// import Checkbox, { Wrapper, Input, Label, Circle } from './index';
import Checkbox, { Tick, Input, Square } from './index';

const mockClick = jest.fn();

const setup = (props: any, label?: string) =>
  mountWithTheme(
    <Checkbox onChange={mockClick} {...props}>
      {label}
    </Checkbox>
  );

describe('<Checkbox/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without a label if none is defined', () => {
    const wrapper = setup({ 'data-qaid': 'nolabel' });
    expect(getByTestId(wrapper, 'nolabel-label')).toHaveLength(0);
  });

  it('renders when a label is present', () => {
    const wrapper = setup({ 'data-qaid': 'nolabel' }, 'Check MY Box');
    expect(getByTestId(wrapper, 'nolabel-label')).toHaveLength(1);
  });

  it('fires the callback function', () => {
    const wrapper = setup({}, 'Check MY Box');
    wrapper.find('input').simulate('change', { target: { checked: true } });
    expect(mockClick).toHaveBeenCalled();
  });

  it('has the correct styling when checked', () => {
    checkStyleRules(
      mountWithTheme(
        <>
          <Input onChange={mockClick} checked />
          <Square />
        </>
      ),
      {
        'background-color': theme.colors.primary,
        'border-color': theme.colors.primary
      },
      { modifier: `:checked + ${Square}::before` }
    );

    checkStyleRules(
      mountWithTheme(
        <>
          <Input onChange={mockClick} checked />
          <Square />
        </>
      ),
      {
        'box-shadow': '0px 0px 0px 10px rgba(3,152,66,0.1)'
      },
      { modifier: `:checked + ${Square}:hover` }
    );

    checkStyleRules(
      mountWithTheme(
        <>
          <Input onChange={mockClick} checked />
          <Tick />
        </>
      ),
      {
        display: 'block'
      },
      { modifier: `:checked + ${Square} ${Tick}` }
    );
  });

  it('has the correct styling when unchecked', () => {
    checkStyleRules(
      mountWithTheme(
        <>
          <Square />
        </>
      ),
      {
        'border-radius': '50%'
      }
    );

    checkStyleRules(
      mountWithTheme(
        <>
          <Square />
        </>
      ),
      {
        'background-color': 'transparent',
        border: '2px solid rgba(0,0,0,0.75)'
      },
      { modifier: `::before` }
    );

    checkStyleRules(
      mountWithTheme(
        <>
          <Tick />
        </>
      ),
      {
        display: 'none'
      }
    );
  });

  it('has the correct styling when disabled', () => {
    checkStyleRules(
      mountWithTheme(
        <>
          <Input onChange={mockClick} disabled />
          <Square />
        </>
      ),
      {
        'box-shadow': 'none',
        'background-color': 'transparent'
      },
      { modifier: `:disabled + ${Square}:hover` }
    );

    checkStyleRules(
      mountWithTheme(
        <>
          <Input onChange={mockClick} disabled />
          <Square />
        </>
      ),
      {
        'border-color': '#DBDBDB',
        'background-color': 'transparent',
        cursor: 'not-allowed',
        'box-shadow': undefined
      },
      { modifier: `:disabled + ${Square}::before` }
    );

    checkStyleRules(
      mountWithTheme(
        <>
          <Input onChange={mockClick} disabled />
          <Square />
          <Tick />
        </>
      ),
      {
        display: 'none'
      },
      { modifier: `:disabled + ${Square} ${Tick}` }
    );
  });

  it.skip('cannot be toggled when disabled', () => {
    // A few options tried below - enzyme does not actually update the DOM
    // const wrapper = setup({ checked: false, disable: true }, 'Check MY Box');
    // const input = wrapper.find('input');
    // input.simulate('click');
    // wrapper.find('input').simulate('change', { target: { checked: true } });
    // wrapper.getDOMNode().dispatchEvent(new Event('click'));
    // wrapper.find('input').simulate('change', { target: { checked: true } });
    // expect(mockClick).toHaveBeenCalled();
  });
});
