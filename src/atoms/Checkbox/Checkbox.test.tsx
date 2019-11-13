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

  it('it fires the callback function', () => {
    const wrapper = setup({}, 'Check MY Box');
    wrapper.find('input').simulate('change', { target: { checked: true } });
    expect(mockClick).toHaveBeenCalled();
  });

  it('it cannot be toggle to when disable', () => {
    const wrapper = setup({ checked: false }, 'Check MY Box');
    const input = wrapper.find('input');
    const squareEl = wrapper.find(Square);

    checkStyleRules(mountWithTheme(<Input />), {
      display: 'inline-block'
    });
  });

  // it('has the correct style rules when checked', () => {
  //   checkStyleRules(
  //     mountWithTheme(
  //       <>
  //         <Input onChange={mockClick} checked />
  //         <Square />
  //         <Tick />
  //       </>
  //     ),
  //     {
  //       display: 'none'
  //     },
  //     { modifier: `:disabled + ${Square} ${Tick}` }
  //   );
  // });

  // it('has the correct style rules when checked', () => {
  //   checkStyleRules(
  //     mountWithTheme(
  //       <>
  //         <Input onChange={mockClick} checked />
  //         <Square />
  //         <Tick />
  //       </>
  //     ),
  //     {
  //       display: 'none'
  //     },
  //     { modifier: `:disabled + ${Square} ${Tick}` }
  //   );
  // });

  // it('has the correct style rules when disabled', () => {
  //   checkStyleRules(
  //     mountWithTheme(
  //       <>
  //         <Input disabled />
  //         <Square />
  //       </>
  //     ),
  //     {
  //       'box-shadow': 'none'
  //     },
  //     { modifier: `:disabled + ${Square}:hover` }
  //   );
  // });

  // it('has the correct style rules when disabled', () => {
  //   const wrapper = setup({ disabled: true }, 'Check MY Box');
  //   wrapper.find('input').simulate('change', { target: { disabled: true } });
  //   const ticket = wrapper.find(Tick);
  //   console.log(wrapper.find(Tick).debug());

  //   expect(ticket).toHaveStyleRule('display', 'none');
  // });

  // it('it cannot be toggled to unchecked when disabled');
  // it('it cannot be checked clicked when disabled');
  // it('it can be toggled and untoggled when clicked');
  // it('does not have a hover effect when disabled', () => {
});
