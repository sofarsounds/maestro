import React from 'react';
import { renderWithTheme, fireEvent } from '../../test';
import Icon from '../../atoms/Icon';
import Select from './index';

let cities = [
  { id: 1, title: 'London', country: 'UK', value: 'london' },
  { id: 2, title: 'Cardiff', country: 'UK', value: 'cardiff' },
  { id: 3, title: 'Bristol', country: 'UK', value: 'bristol' },
  { id: 4, title: 'New York', country: 'US', value: 'newyork' }
];

const setup = (extraProps?: any) =>
  renderWithTheme(
    <Select
      data-qaid="select"
      options={cities}
      placeholder="Select City"
      {...extraProps}
    />
  );

describe('<Select />', () => {
  it('renders correctly with default props', () => {
    const { queryByTestId } = setup();
    expect(queryByTestId('select')).toBeInTheDocument();
    expect(queryByTestId('select-menu')).not.toBeInTheDocument();
  });

  it('renders correctly with a custom left hand side icon', () => {
    const { queryByTestId } = setup({
      renderLeftIcon: () => <Icon name="helpCircleOutline" />
    });

    expect(queryByTestId('select-left-icon')).toBeInTheDocument();
  });

  it('opens the select when clicking the input', () => {
    const { queryByTestId } = setup();

    fireEvent.click(queryByTestId('select')!);

    expect(queryByTestId('select-menu')).toBeInTheDocument();
  });

  it('closes the select when clicking the input', () => {
    const { queryByTestId } = setup();

    fireEvent.click(queryByTestId('select')!);
    expect(queryByTestId('select-menu')).toBeInTheDocument();

    fireEvent.click(queryByTestId('select')!);
    expect(queryByTestId('select-menu')).not.toBeInTheDocument();
  });

  it('closes the select when clicking outside of the input', () => {
    const { queryByTestId } = setup();

    fireEvent.click(queryByTestId('select')!);
    expect(queryByTestId('select-menu')).toBeInTheDocument();

    fireEvent.click(document);
    expect(queryByTestId('select-menu')).not.toBeInTheDocument();
  });

  it('closes the select when hitting escape', () => {
    const { queryByTestId } = setup();

    fireEvent.click(queryByTestId('select')!);
    expect(queryByTestId('select-menu')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape', code: 27 });
    expect(queryByTestId('select-menu')).not.toBeInTheDocument();
  });

  it('renders the correct options', () => {
    const { queryByTestId, queryAllByTestId } = setup();

    fireEvent.click(queryByTestId('select')!);

    const options = queryAllByTestId('select-option');
    expect(options).toHaveLength(4);
    expect(options[0]).toHaveTextContent('London');
    expect(options[1]).toHaveTextContent('Cardiff');
    expect(options[2]).toHaveTextContent('Bristol');
    expect(options[3]).toHaveTextContent('New York');
  });

  it('renders the correct options when getOptionLabel is provided', () => {
    const { queryByTestId, queryAllByTestId } = setup({
      getOptionLabel: (opt: any) => (
        <span>
          {opt.title}, {opt.country}
        </span>
      )
    });

    fireEvent.click(queryByTestId('select')!);

    const options = queryAllByTestId('select-option');
    expect(options).toHaveLength(4);

    expect(options[0]).toHaveTextContent('London, UK');
    expect(options[1]).toHaveTextContent('Cardiff, UK');
    expect(options[2]).toHaveTextContent('Bristol, UK');
    expect(options[3]).toHaveTextContent('New York, US');
  });

  it('renders a custom open when renderOption is provided', () => {
    const { queryByTestId, queryAllByTestId } = setup({
      renderOption: ({ option }: any) => (
        <div key={option.value} data-qaid="select-custom-opt">
          {option.country}
        </div>
      )
    });

    fireEvent.click(queryByTestId('select')!);

    const options = queryAllByTestId('select-custom-opt');
    expect(options).toHaveLength(4);

    expect(options[0]).toHaveTextContent('UK');
    expect(options[1]).toHaveTextContent('UK');
    expect(options[2]).toHaveTextContent('UK');
    expect(options[3]).toHaveTextContent('US');
  });

  it('executes a callback and updates the label when an option is selected', () => {
    const mockClick = jest.fn();
    const { queryByTestId, queryAllByTestId } = setup({
      handleOptionClick: mockClick
    });

    fireEvent.click(queryByTestId('select')!);
    fireEvent.click(queryAllByTestId('select-option')[0]);

    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(mockClick).toHaveBeenCalledWith(1, cities[0]);

    expect(queryByTestId('select-input')).toHaveValue('London');
  });

  it('executes a callback with custom parameters when an option is selected', () => {
    const mockClick = jest.fn();
    const { queryByTestId, queryAllByTestId } = setup({
      handleOptionClick: mockClick,
      getOptionValue: (opt: any) => opt.value,
      getOptionLabel: (opt: any) => `${opt.title}, ${opt.country}`
    });

    fireEvent.click(queryByTestId('select')!);
    fireEvent.click(queryAllByTestId('select-option')[0]);

    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(mockClick).toHaveBeenCalledWith('london', cities[0]);

    expect(queryByTestId('select-input')).toHaveValue('London, UK');
  });
});
