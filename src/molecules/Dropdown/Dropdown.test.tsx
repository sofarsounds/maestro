import React from 'react';
import { renderWithTheme, fireEvent } from '../../test';

import Dropdown from './';

const setup = () =>
  renderWithTheme(
    <Dropdown data-qaid="dropdown" label="Label">
      I am the Dropdown Content
    </Dropdown>
  );

describe('<Dropdown />', () => {
  it('renders correctly', () => {
    const { queryByTestId } = setup();

    expect(queryByTestId('dropdown')).toBeInTheDocument();
    expect(queryByTestId('dropdown-flyout')).not.toBeInTheDocument();
  });

  it('opens the dropdown when clicking the trigger', () => {
    const { queryByTestId } = setup();

    expect(queryByTestId('dropdown')).toBeInTheDocument();
    fireEvent.click(queryByTestId('dropdown')!);
    expect(queryByTestId('dropdown-flyout')).toBeInTheDocument();
  });

  it('closes the dropdown when clicking the trigger again', () => {
    const { queryByTestId } = setup();

    expect(queryByTestId('dropdown')).toBeInTheDocument();
    fireEvent.click(queryByTestId('dropdown')!);
    expect(queryByTestId('dropdown-flyout')).toBeInTheDocument();
    fireEvent.click(queryByTestId('dropdown')!);
    expect(queryByTestId('dropdown-flyout')).not.toBeInTheDocument();
  });

  it('closes the dropdown when clicking outside the trigger or dropdown', () => {
    const { queryByTestId } = setup();

    expect(queryByTestId('dropdown')).toBeInTheDocument();
    fireEvent.click(queryByTestId('dropdown')!);
    expect(queryByTestId('dropdown-flyout')).toBeInTheDocument();
    fireEvent.click(document);
    expect(queryByTestId('dropdown-flyout')).not.toBeInTheDocument();
  });
});
