import React from 'react';
import { mountWithTheme } from '../../test';
import Select, { Option } from './index';
const mockClick = jest.fn();
const mockClickOption = jest.fn();
const outsideClick = jest.fn();

let citiesData = [
  { name: 'London', value: 'london' },
  { name: 'Cardiff', value: 'cardiff' },
  { name: 'Bristol', value: 'bristol' }
];

const setup = () =>
  mountWithTheme(
    <>
      <div onClick={outsideClick} id="outside_idiot">
        I am a idiot
      </div>
      <Select
        handleOptionClick={mockClick}
        placeholder="I am placeholder"
        data-qaid="testQaId"
      >
        {({ optionClick }: any) =>
          citiesData.map((cityData, index) => (
            <Option key={index} value={cityData.value} onClick={optionClick} />
          ))
        }
      </Select>
    </>
  );

describe('Select', () => {
  it('renders correctly', () => {
    expect(setup()).toMatchSnapshot();
  });

  it('renders a placeholder', () => {
    let wrapper = setup();
    let placeholder = wrapper.find('input').props().placeholder;
    expect(placeholder).toBe('I am placeholder');
  });

  it('opens the menu when the button is clicked', () => {
    let wrapper = setup();
    let button = wrapper.find('button');
    let options = wrapper.find(Option);
    expect(options.length).toBe(0);
    button.simulate('click');
    let optionUpdated = wrapper.find(Option);
    expect(optionUpdated.length).toBe(3);
  });

  it('calls the select click handler when an option is clicked', () => {
    let wrapper = setup();
    let button = wrapper.find('button');
    button.simulate('click');
    let options = wrapper.find(Option).first();
    options.simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });

  it.todo('closes the menu when clicked outside of select component');

  it.todo('closes the menu when keydown escape');

  it('returns the options value to the click select click handler onClick', () => {
    let wrapper = setup();
    let button = wrapper.find('button');
    button.simulate('click');
    let options = wrapper.find(Option).first();
    options.simulate('click');
    expect(mockClick).toHaveBeenCalledWith('london');
  });

  it('calls the onClick options handler when an option is clicked', () => {
    const setup = () =>
      mountWithTheme(
        <Select placeholder={'I am placeholder'}>
          {() =>
            citiesData.map((cityData, index) => (
              <Option
                key={index}
                value={cityData.value}
                onClick={mockClickOption}
              />
            ))
          }
        </Select>
      );

    let wrapper = setup();
    let button = wrapper.find('button');
    button.simulate('click');
    let options = wrapper.find(Option);
    options.first().simulate('click');
    expect(mockClickOption).toHaveBeenCalled();
  });

  it('collapses the open menu when an option is clicked', () => {
    let wrapper = setup();
    let button = wrapper.find('button');
    button.simulate('click');
    let options = wrapper.find(Option);
    expect(options.length).toBe(3);
    options.first().simulate('click');
    let optionUpdated = wrapper.find(Option);
    expect(optionUpdated.length).toBe(0);
  });
});
