import React from 'react';
import { renderWithTheme, fireEvent } from '../../test';
import Icon from '../../atoms/Icon';
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

const setup = (extraProps?: any) =>
  renderWithTheme(
    <Select<Cities>
      data-qaid="select"
      options={cities}
      placeholder="Select City"
      getOptionLabel={o => o.title}
      {...extraProps}
    />
  );

describe('<Select />', () => {
  it('renders correctly', () => {
    const { queryByTestId } = setup();
    expect(queryByTestId('select')).toBeInTheDocument();
    expect(queryByTestId('select-menu')).not.toBeInTheDocument();
  });

  it('renders correctly with a defaultValue', () => {
    const { queryByTestId } = setup({
      defaultValue: cities[2]
    });

    expect(queryByTestId('select-input')).toHaveValue('Bristol');
  });

  it('renders correctly with a custom left hand side icon', () => {
    const { queryByTestId } = setup({
      renderLeftIcon: <Icon name="helpCircleOutline" />
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

  it('renders correctly in the loading state', () => {
    const { queryByTestId } = setup({
      state: 'loading'
    });

    expect(queryByTestId('select-spinner')).toBeInTheDocument();
    fireEvent.click(queryByTestId('select')!);
    expect(queryByTestId('select-loading-msg')).toBeInTheDocument();
  });

  it('renders correctly in the error state', () => {
    const { queryByTestId } = setup({
      state: 'error'
    });

    expect(queryByTestId('select-error-icon')).toBeInTheDocument();
    fireEvent.click(queryByTestId('select')!);
    expect(queryByTestId('select-error-msg')).toBeInTheDocument();
  });

  it('renders the correct options with the correct label', () => {
    const { queryByTestId, queryAllByTestId } = setup({
      getOptionLabel: (opt: any) => `${opt.title}, ${opt.country}`
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
      renderOption: (option: any) => (
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

  it('renders the correct groups if a groupBy function is provided', () => {
    const { queryByTestId, queryAllByTestId } = setup({
      groupBy: (opt: any) => opt.country
    });

    fireEvent.click(queryByTestId('select')!);

    const groups = queryAllByTestId('select-group');
    expect(groups).toHaveLength(2);

    // check group 1
    const groupUK = queryAllByTestId('select-group-UK-option');
    expect(queryByTestId('select-group-UK-header')).toHaveTextContent('UK');
    expect(groupUK).toHaveLength(3);

    // check group 1
    const groupUS = queryAllByTestId('select-group-US-option');
    expect(queryByTestId('select-group-US-header')).toHaveTextContent('US');
    expect(groupUS).toHaveLength(1);
  });

  it('executes a callback and updates the label when an option is selected', () => {
    const mockClick = jest.fn();
    const { queryByTestId, queryAllByTestId } = setup({
      onChange: mockClick,
      getOptionLabel: (opt: any) => `${opt.title}, ${opt.country}`
    });

    fireEvent.click(queryByTestId('select')!);
    fireEvent.click(queryAllByTestId('select-option')[0]);

    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(mockClick).toHaveBeenCalledWith(cities[0]);

    expect(queryByTestId('select-input')).toHaveValue('London, UK');
  });

  it('executes a callback and updates the label when an option is selected and a defaultValue is given', () => {
    const mockClick = jest.fn();
    const { queryByTestId, queryAllByTestId } = setup({
      onChange: mockClick,
      defaultValue: cities[2]
    });

    expect(queryByTestId('select-input')).toHaveValue('Bristol');

    fireEvent.click(queryByTestId('select')!);
    fireEvent.click(queryAllByTestId('select-option')[1]);

    expect(mockClick).toHaveBeenCalledTimes(1);
    expect(mockClick).toHaveBeenCalledWith(cities[1]);

    expect(queryByTestId('select-input')).toHaveValue('Cardiff');
  });

  it('sets the correct selected option when value is given', () => {
    const mockClick = jest.fn();
    const { queryByTestId } = setup({
      onChange: mockClick,
      value: cities[3]
    });

    expect(queryByTestId('select-input')).toHaveValue('New York');
  });
});
