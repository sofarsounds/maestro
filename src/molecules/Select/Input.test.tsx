import React from 'react';
import theme from '../../theme';
import { checkStyleRules, renderWithTheme, fireEvent } from '../../test';
import Icon from '../../atoms/Icon';
import Input from './Input';

const setup = (props: any) =>
  renderWithTheme(<Input data-qaid="test" {...props} />);

describe('<Select />', () => {
  describe('<Input />', () => {
    it('executes a callback when clicking the container', () => {
      const mockClick = jest.fn();
      const { queryByTestId } = setup({ onToggle: mockClick });

      fireEvent.click(queryByTestId('test')!);
      expect(mockClick).toHaveBeenCalledTimes(1);
    });

    it('renders the correctly', () => {
      const { queryByTestId, queryByPlaceholderText } = setup({
        inputProps: {
          placeholder: 'Awesome Select'
        }
      });

      expect(queryByTestId('test')).toBeInTheDocument();
      expect(queryByTestId('test-input')).toBeInTheDocument();
      expect(queryByTestId('test-toggle')).toBeInTheDocument();

      expect(queryByPlaceholderText('Awesome Select')).toBeInTheDocument();
      expect(queryByTestId('test-left-icon')).not.toBeInTheDocument();

      expect(queryByTestId('test-toggle-icon')).toHaveClass('icon-caretDown');
    });

    it('renders the correctly with a custom icon', () => {
      const { queryByTestId } = setup({
        renderLeftIcon: () => <Icon name="spotify" />
      });

      expect(queryByTestId('test-left-icon')).toBeInTheDocument();
    });

    describe('<Wrapper />', () => {
      it('has the correct style attributes', () => {
        const { container, queryByTestId } = setup({});
        const wrapper = container.firstChild;

        checkStyleRules(wrapper, {
          'padding-right': '8px',
          display: 'flex',
          'align-items': 'center'
        });
      });

      it('has a pointer cursor when readOnly is true', () => {
        const { container, queryByTestId } = setup({
          inputProps: { readOnly: true }
        });
        const wrapper = container.firstChild;

        checkStyleRules(wrapper, {
          cursor: 'pointer'
        });
      });

      it('has a pointer cursor when isOpen is true', () => {
        const { container, queryByTestId } = setup({
          isOpen: true
        });
        const wrapper = container.firstChild;

        checkStyleRules(wrapper, {
          'box-shadow': '0 10px 20px 0 rgba(0,0,0,0.19)'
        });

        checkStyleRules(
          wrapper,
          {
            'border-color': theme.colors.macyGrey
          },
          {
            modifier: ':hover'
          }
        );
      });

      it('has the correct style attributes when color is inverted', () => {
        const { container, queryByTestId } = setup({ invertColor: true });
        const wrapper = container.firstChild;

        checkStyleRules(wrapper, {
          background: 'transparent',
          'border-color': theme.colors.whiteDenim
        });

        checkStyleRules(
          wrapper,
          {
            'border-color': theme.colors.whiteDenim
          },
          {
            modifier: ':hover'
          }
        );
      });
    });

    describe('<IconWrapper />', () => {
      it('has the correct style attributes', () => {
        const { queryByTestId } = setup({
          renderLeftIcon: () => <Icon name="spotify" />
        });

        checkStyleRules(queryByTestId('test-left-icon'), {
          'margin-right': '8px',
          height: '100%',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center'
        });

        checkStyleRules(
          queryByTestId('test-left-icon'),
          {
            color: theme.colors.blueSmoke
          },
          {
            modifier: 'i::before'
          }
        );
      });

      it('has the correct style attributes when color is inverted', () => {
        const { queryByTestId } = setup({
          invertColor: true,
          renderLeftIcon: () => <Icon name="spotify" />
        });

        checkStyleRules(
          queryByTestId('test-left-icon'),
          {
            color: theme.colors.whiteDenim
          },
          {
            modifier: 'i::before'
          }
        );
      });
    });
  });
});
