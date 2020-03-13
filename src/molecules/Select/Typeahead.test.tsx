import React from 'react';
import { renderWithTheme, fireEvent } from '../../test';
import Select from './index';

interface Cities {
  id: number;
  title: string;
  country: string;
  value: string;
}
[];

const cities = [
  { id: 1, title: 'London', country: 'UK', value: 'london' },
  { id: 2, title: 'Cardiff', country: 'UK', value: 'cardiff' },
  { id: 3, title: 'Bristol', country: 'UK', value: 'bristol' },
  { id: 4, title: 'New York', country: 'US', value: 'newyork' }
];

const popularOptions = [
  { id: 20, title: 'Brecon Beacons', country: 'UK', value: 'bb' },
  { id: 21, title: 'Tryfan', country: 'UK', value: 'tryfan' },
  { id: 22, title: 'Lake District', country: 'UK', value: 'lakes' },
  { id: 23, title: 'Box Hill', country: 'UK', value: 'boxhill' },
  { id: 24, title: 'Mont Blanc', country: 'IT', value: 'mb' }
];

const setup = (extraProps?: any) =>
  renderWithTheme(
    <Select<Cities>
      data-qaid="typeahead"
      searchable
      options={cities}
      placeholder="Select City"
      getOptionLabel={o => o.title}
      onChange={jest.fn()}
      {...extraProps}
    />
  );

describe('<Typeahead />', () => {
  it('does not show a clear button when no value is set', () => {
    const { queryByTestId } = setup();

    expect(queryByTestId('typeahead-clear')).not.toBeInTheDocument();
  });

  it('renders a clear button when user has selected an option', () => {
    const { queryByTestId, queryAllByTestId } = setup();

    fireEvent.click(queryByTestId('typeahead')!);
    fireEvent.click(queryAllByTestId('typeahead-option')[0]);

    expect(queryByTestId('typeahead-clear')).toBeInTheDocument();
  });

  it('renders a clear button when user has started typing', () => {
    const { queryByTestId } = setup();

    const input = queryByTestId('typeahead-input')!;
    fireEvent.change(input, { target: { value: 'AA' } });
    expect(input).toHaveValue('AA');

    expect(queryByTestId('typeahead-clear')).toBeInTheDocument();
  });

  it('clears the selection when user clicks the clear button', () => {
    const mockOnChange = jest.fn();
    const { queryByTestId, queryAllByTestId } = setup({
      onChange: mockOnChange
    });

    fireEvent.click(queryByTestId('typeahead')!);
    fireEvent.click(queryAllByTestId('typeahead-option')[0]);
    fireEvent.click(queryByTestId('typeahead-clear')!);

    expect(mockOnChange).toHaveBeenLastCalledWith(null);

    const input = queryByTestId('typeahead-input')!;
    expect(input).toHaveValue('');

    expect(queryByTestId('typeahead-clear')).not.toBeInTheDocument();
  });

  it('filters the options when typing in the input', () => {
    const { queryByTestId, queryAllByTestId } = setup();

    fireEvent.click(queryByTestId('typeahead')!);
    expect(queryByTestId('typeahead-menu')).toBeInTheDocument();

    const input = queryByTestId('typeahead-input')!;
    fireEvent.change(input, { target: { value: 'B' } });
    expect(input).toHaveValue('B');

    // initial check
    const options = queryAllByTestId('typeahead-option');
    expect(options).toHaveLength(1);
    expect(options[0]).toHaveTextContent('Bristol');

    // do some more filtering
    fireEvent.change(input, { target: { value: 'n' } });
    expect(input).toHaveValue('n');

    const newOptions = queryAllByTestId('typeahead-option');
    expect(newOptions).toHaveLength(2);
    expect(newOptions[0]).toHaveTextContent('London');
    expect(newOptions[1]).toHaveTextContent('New York');
  });

  it('filters the options by a custom filterBy function', () => {
    const { queryByTestId, queryAllByTestId } = setup({
      filterBy: (option: any, qs: string) => String(option.id) === qs
    });

    fireEvent.click(queryByTestId('typeahead')!);
    expect(queryByTestId('typeahead-menu')).toBeInTheDocument();

    const input = queryByTestId('typeahead-input')!;
    fireEvent.change(input, { target: { value: 'B' } });
    expect(input).toHaveValue('B');

    // make sure default filter doesn't kick in
    const options = queryAllByTestId('typeahead-option');
    expect(options).toHaveLength(0);

    // do some more filtering
    fireEvent.change(input, { target: { value: '3' } });
    expect(input).toHaveValue('3');

    const newOptions = queryAllByTestId('typeahead-option');
    expect(newOptions).toHaveLength(1);
    expect(newOptions[0]).toHaveTextContent('Bristol');
  });

  it('renders an "empty message" when no options match the search string', () => {
    const { queryByTestId } = setup();

    fireEvent.click(queryByTestId('typeahead')!);

    const input = queryByTestId('typeahead-input')!;
    fireEvent.change(input, { target: { value: 'I will not match' } });

    expect(queryByTestId('typeahead-empty-msg')).toBeInTheDocument();
    expect(queryByTestId('typeahead-empty-msg')).toHaveTextContent(
      'No options...'
    );
  });

  it('selects an option and executes onChange after clicking a filtered option', () => {
    const mockOnChange = jest.fn();
    const { queryByTestId, queryAllByTestId } = setup({
      onChange: mockOnChange
    });

    fireEvent.click(queryByTestId('typeahead')!);

    const input = queryByTestId('typeahead-input')!;
    fireEvent.change(input, { target: { value: 'Lon' } });

    const options = queryAllByTestId('typeahead-option');
    fireEvent.click(options[0]);

    expect(input).toHaveValue('London');
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(cities[0]);
  });

  it('clears selection and executes onChange when clearing the input manually', () => {
    const mockOnChange = jest.fn();
    const { queryByTestId } = setup({
      onChange: mockOnChange,
      defaultValue: cities[0]
    });

    const input = queryByTestId('typeahead-input')!;
    expect(input).toHaveValue('London');

    fireEvent.click(queryByTestId('typeahead')!);
    fireEvent.change(input, { target: { value: '' } });

    expect(input).toHaveValue('');
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(null);
  });

  it('reverts to the previous selection when leaving the select without making a new selection', () => {
    const mockOnChange = jest.fn();
    const { queryByTestId } = setup({
      onChange: mockOnChange,
      defaultValue: cities[0]
    });

    const input = queryByTestId('typeahead-input')!;
    expect(input).toHaveValue('London');

    fireEvent.click(queryByTestId('typeahead')!);
    fireEvent.change(input, { target: { value: 'Bri' } });

    fireEvent.click(document);

    expect(input).toHaveValue('London');
    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });

  it('renders a list of popular options when first opening the select', () => {
    const mockOnChange = jest.fn();
    const { queryByTestId, queryAllByTestId } = setup({
      onChange: mockOnChange,
      getPopularOptionsTitle: (options: any) =>
        `Top ${options.length} Mountains`,
      popularOptions
    });

    fireEvent.click(queryByTestId('typeahead')!);

    expect(queryByTestId('typeahead-popular')).toBeInTheDocument();

    expect(queryByTestId('typeahead-popular-header')).toHaveTextContent(
      'Top 5 Mountains'
    );

    expect(queryAllByTestId('typeahead-option')).toHaveLength(5);
  });

  it('clears the list of popular options when user starts typing in input', () => {
    const mockOnChange = jest.fn();
    const { queryByTestId, queryAllByTestId } = setup({
      onChange: mockOnChange,
      getPopularOptionsTitle: (options: any) =>
        `Top ${options.length} Mountains`,
      popularOptions
    });

    fireEvent.click(queryByTestId('typeahead')!);

    expect(queryByTestId('typeahead-popular')).toBeInTheDocument();
    expect(queryAllByTestId('typeahead-option')).toHaveLength(5);

    const input = queryByTestId('typeahead-input')!;
    fireEvent.change(input, { target: { value: 'Lo' } });

    expect(queryByTestId('typeahead-popular')).not.toBeInTheDocument();
    expect(queryAllByTestId('typeahead-option')).toHaveLength(1);
  });

  it('reverts to the list of popular options when clearing the input', () => {
    const mockOnChange = jest.fn();
    const { queryByTestId, queryAllByTestId } = setup({
      onChange: mockOnChange,
      getPopularOptionsTitle: (options: any) =>
        `Top ${options.length} Mountains`,
      popularOptions
    });

    fireEvent.click(queryByTestId('typeahead')!);

    expect(queryByTestId('typeahead-popular')).toBeInTheDocument();
    expect(queryAllByTestId('typeahead-option')).toHaveLength(5);

    const input = queryByTestId('typeahead-input')!;
    fireEvent.change(input, { target: { value: 'Lo' } });

    expect(queryByTestId('typeahead-popular')).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: '' } });

    expect(queryByTestId('typeahead-popular')).toBeInTheDocument();
  });
});
