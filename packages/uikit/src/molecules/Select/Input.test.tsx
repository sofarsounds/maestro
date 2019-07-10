import React from 'react';
/* import theme from '../../theme'; */
import { mountWithTheme } from '../../test';
import Input from './Input';

const mockClick = jest.fn();

const setup = (
  isOpen: boolean = false,
  placeholder: string = 'I am a placeholder'
) =>
  mountWithTheme(
    <Input isOpen={isOpen} placeholder={placeholder} toggleSelect={mockClick}>
      I am a child component
    </Input>
  );

describe('Select <Input />', () => {
  it('it renders correctly', () => {
    expect(setup()).toMatchSnapshot();
  });

  it('it has the correct style properties when isOpen is false', () => {
    let wrapper = setup(false);
    let input = wrapper;
    expect(input).toHaveStyleRule('border-radius', '2px');
    expect(input).not.toHaveStyleRule('box-shadow');
  });

  /* TODO: Why this doesn't work */
  /* wrapper.setProps({ children: <Input isOpen={true} onClick={mockClick} /> }); */
  /* wrapper.update(); */
  /* input.update(); */

  it('it has the correct style properties when isOpen is true', () => {
    let wrapper = setup(true);
    let input = wrapper;
    expect(input).toHaveStyleRule('border-radius', '2px');
    expect(input).not.toHaveStyleRule('box-shadow');

    expect(input).toHaveStyleRule(
      'box-shadow',
      '0 10px 20px 0 rgba(0,0,0,0.19)'
    );
  });

  it('it renders a placeholder', () => {
    let wrapper = setup();
    let placeholder = wrapper.find('input').props().placeholder;
    expect(placeholder).toBe('I am a placeholder');
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

  it('it shows the down icon when isOpen is false', () => {
    let wrapper = setup(false);
    let icon = wrapper.find('Icon').props().name;
    expect(icon).toBe('caretDown');
  });
});
