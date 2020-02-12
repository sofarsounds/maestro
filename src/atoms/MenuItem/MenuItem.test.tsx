import React from 'react';
import theme from '../../theme';
import { checkStyleRules, renderWithTheme, fireEvent } from '../../test';
import MenuItem from './';

const mockClick = jest.fn();

const setup = ({ onClick, content = 'Content' }: any) =>
  renderWithTheme(
    <MenuItem data-qaid="option" onClick={onClick}>
      {content}
    </MenuItem>
  );

describe('<MenuItem />', () => {
  it('renders the correct content', () => {
    const { container } = setup({ mockClick, content: 'Cardiff' });
    expect(container).toHaveTextContent('Cardiff');
  });

  it('executes a callback when the option is clicked', () => {
    const callback = jest.fn();
    const { queryByTestId } = setup({ onClick: callback });
    fireEvent.click(queryByTestId('option')!);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('has the correct style attributes', () => {
    const {
      container: { firstChild }
    } = setup({ mockClick });

    checkStyleRules(firstChild, {
      'margin-top': '0px',
      'list-style': 'none',
      padding: '8px 16px',
      'letter-spacing': '0.25px',
      cursor: 'pointer',
      color: theme.colors.backToBlack
    });

    checkStyleRules(
      firstChild,
      {
        'background-color': theme.colors.silverSprings
      },
      {
        modifier: ':hover'
      }
    );

    checkStyleRules(
      firstChild,
      {
        'background-color': theme.colors.silverSprings
      },
      {
        modifier: ':focus'
      }
    );
  });
});
