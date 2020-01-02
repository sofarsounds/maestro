import React from 'react';
/* import theme from '../../theme'; */
import { mountWithTheme } from '../../test';
import Input from './Input';

const mockClick = jest.fn();

const setup = (
  isOpen: boolean = false,
  placeholder: string = 'I am a placeholder',
  readonly: boolean = false,
  dataQaId: string | undefined = undefined
) =>
  mountWithTheme(
    <Input
      isOpen={isOpen}
      placeholder={placeholder}
      toggleSelect={mockClick}
      readonly={readonly}
      data-qaid={dataQaId}
    >
      I am a child component
    </Input>
  );

describe('Select <Input />', () => {
  it('it renders correctly', () => {
    expect(
      setup(false, 'I am a placeholder', false, 'testDataId')
    ).toMatchSnapshot();
  });

  it('it has the correct style properties when isOpen is false', () => {
    let wrapper = setup(false);
    expect(wrapper).toHaveStyleRule('border-radius', '2px');
    expect(wrapper).not.toHaveStyleRule('box-shadow');
  });

  /* TODO: Why this doesn't work */
  /* wrapper.setProps({ children: <Input isOpen={true} onClick={mockClick} /> }); */
  /* wrapper.update(); */
  /* input.update(); */

  it('it has the correct style properties when isOpen is true', () => {
    let wrapper = setup(true);
    expect(wrapper).toHaveStyleRule('border-radius', '2px');
    expect(wrapper).not.toHaveStyleRule('box-shadow');

    expect(wrapper).toHaveStyleRule(
      'box-shadow',
      '0 10px 20px 0 rgba(0,0,0,0.19)'
    );
  });

  it('it renders a placeholder', () => {
    let wrapper = setup();
    let placeholder = wrapper.find('input').props().placeholder;
    expect(placeholder).toBe('I am a placeholder');
  });

  it('it adds a data-qaid on the InputWrapper, InputStyle, and Button', () => {
    let wrapper = setup(true, 'cat', true, 'testDataId');
    let wrapperQaid = wrapper.find('Input').props()['data-qaid'];
    expect(wrapperQaid).toBe('testDataId');
    let inputQaid = wrapper.find('input').props()['data-qaid'];
    expect(inputQaid).toBe('testDataId-input');
    let buttonQaid = wrapper.find('button').props()['data-qaid'];
    expect(buttonQaid).toBe('testDataId-toggle');
  });

  it('it handles no data-qaid', () => {
    let wrapper = setup();
    let inputWrapper = wrapper.find('Input');
    expect(inputWrapper).toBeDefined();
  });

  it('it triggers onClick when clicked', () => {
    let wrapper = setup().find('button');
    wrapper.simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });

  it('it shows the up icon when isOpen is true', () => {
    let wrapper = setup(true);
    let icon = wrapper.find('Icon').props().name;
    expect(icon).toBe('caretUp');
  });

  it('adds a readonly prop', () => {
    let wrapper = setup(true, 'cat', true);
    let input = wrapper.find('input');
    expect(input.props().readOnly).toBe(true);
  });

  it('it shows the down icon when isOpen is false', () => {
    let wrapper = setup(false);
    let icon = wrapper.find('Icon').props().name;
    expect(icon).toBe('caretDown');
  });
});
