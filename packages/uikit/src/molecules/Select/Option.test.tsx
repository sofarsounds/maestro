import React from 'react';
import theme from '../../theme';
import { mountWithTheme } from '../../test';
import Option from './Option';

const mockClick = jest.fn();

const setup = () =>
  mountWithTheme(<Option onClick={mockClick}>cardiff</Option>);

describe('Select <Menu />', () => {
  it('it renders correctly', () => {
    expect(setup()).toMatchSnapshot();
  });

  it('renders the name value', () => {
    let wrapper = setup()
      .find('li')
      .text();
    expect(wrapper).toBe('cardiff');
  });

  it('triggers onClick when clicked', () => {
    let wrapper = setup();
    wrapper.simulate('click');
    expect(mockClick).toHaveBeenCalled();
  });

  it('matches style properties for inactiv', () => {
    let wrapper = setup();
    expect(wrapper).toHaveStyleRule('letter-spacing', '0.1px');
    expect(wrapper).toHaveStyleRule('margin-top', '0px');
    expect(wrapper).toHaveStyleRule('color', theme.colours.backToBlack);
  });

  it('is styled correctly for psuedo states', () => {
    let wrapper = setup();
    expect(wrapper).toHaveStyleRule(
      'background-color',
      theme.colours.silverSprings,
      {
        modifier: ':hover'
      }
    );
    expect(wrapper).toHaveStyleRule(
      'background-color',
      theme.colours.silverSprings,
      {
        modifier: ':focus'
      }
    );
  });
});
