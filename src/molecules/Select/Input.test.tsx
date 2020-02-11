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

    it('renders correctly', () => {
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

    it('renders correctly with a custom icon', () => {
      const { queryByTestId } = setup({
        renderLeftIcon: <Icon name="spotify" />
      });

      expect(queryByTestId('test-left-icon')).toBeInTheDocument();
    });

    it('does not render a clear button the input is read only', () => {
      const mockClear = jest.fn();
      const { queryByTestId } = setup({
        inputProps: {
          readOnly: true,
          onChange: () => {},
          onClear: mockClear,
          value: 'Lon'
        }
      });

      expect(queryByTestId('test-clear')).not.toBeInTheDocument();
    });

    it('does not render a clear button if onClear is not given', () => {
      const { queryByTestId } = setup({
        inputProps: {
          readOnly: false,
          onChange: () => {},
          value: 'Lon'
        }
      });

      expect(queryByTestId('test-clear')).not.toBeInTheDocument();
    });

    it('does not render a clear button if input has no value', () => {
      const mockClear = jest.fn();
      const { queryByTestId } = setup({
        inputProps: {
          readOnly: false,
          onChange: () => {},
          onClear: mockClear,
          value: ''
        }
      });

      expect(queryByTestId('test-clear')).not.toBeInTheDocument();
    });

    it('renders a clear button when onClear is given and input has a value', () => {
      const mockClear = jest.fn();
      const { queryByTestId } = setup({
        inputProps: {
          readOnly: false,
          onChange: () => {},
          onClear: mockClear,
          value: 'Lon'
        }
      });

      expect(queryByTestId('test-clear')).toBeInTheDocument();
      fireEvent.click(queryByTestId('test-clear')!);
      expect(mockClear).toHaveBeenCalledTimes(1);
    });

    describe('<Wrapper />', () => {
      it('has the correct style attributes', () => {
        const { container } = setup({});
        const wrapper = container.firstChild;

        checkStyleRules(wrapper, {
          'padding-right': '8px',
          display: 'flex',
          'align-items': 'center'
        });
      });

      it('has a pointer cursor when readOnly is true', () => {
        const { container } = setup({
          inputProps: { readOnly: true }
        });
        const wrapper = container.firstChild;

        checkStyleRules(wrapper, {
          cursor: 'pointer'
        });
      });

      it('has a pointer cursor when isOpen is true', () => {
        const { container } = setup({
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
        const { container } = setup({ invertColor: true });
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
          renderLeftIcon: <Icon name="spotify" />
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
          renderLeftIcon: <Icon name="spotify" />
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

    describe('<StyledInput />', () => {
      it('has the correct style attributes', () => {
        const { queryByTestId } = setup({});

        const input = queryByTestId('test-input');

        checkStyleRules(input, {
          background: 'transparent',
          height: '100%',
          width: '100%',
          border: 'none',
          'font-size': theme.fontSizes.body2,
          'letter-spacing': '0.1px',
          color: theme.colors.backToBlack
        });

        checkStyleRules(
          queryByTestId('test-input'),
          {
            outline: 'none'
          },
          { modifier: ':hover' }
        );

        checkStyleRules(
          queryByTestId('test-input'),
          {
            outline: 'none'
          },
          { modifier: ':focus' }
        );

        checkStyleRules(
          input,
          {
            color: theme.colors.blueSmoke
          },
          { modifier: '::placeholder' }
        );
      });

      it('has the correct style attributes when color is inverted', () => {
        const { queryByTestId } = setup({ invertColor: true });

        const input = queryByTestId('test-input');

        checkStyleRules(input, {
          color: theme.colors.whiteDenim
        });

        checkStyleRules(
          input,
          {
            color: theme.colors.whiteDenim
          },
          { modifier: '::placeholder' }
        );
      });
    });

    describe('<ActionButton />', () => {
      it('has the correct style attributes', () => {
        const { queryByTestId } = setup({});

        const btn = queryByTestId('test-toggle');

        checkStyleRules(btn, {
          width: '25px',
          height: '25px',
          border: 'none',
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          transition: 'all 0.15s ease',
          cursor: 'pointer',
          'border-radius': '100%'
        });

        checkStyleRules(
          btn,
          {
            'background-color': theme.colors.silverSprings
          },
          { modifier: ':hover' }
        );

        checkStyleRules(
          btn,
          {
            outline: 'none'
          },
          { modifier: ':focus' }
        );

        checkStyleRules(
          btn,
          {
            color: theme.colors.blueSmoke
          },
          { modifier: 'i::before' }
        );
      });

      it('has the correct style attributes when color is inverted', () => {
        const { queryByTestId } = setup({ invertColor: true });

        const btn = queryByTestId('test-toggle');

        checkStyleRules(
          btn,
          {
            'background-color': theme.colors.paintItBlack
          },
          { modifier: ':hover' }
        );

        checkStyleRules(
          btn,
          {
            color: theme.colors.whiteDenim
          },
          { modifier: 'i::before' }
        );
      });
    });
  });
});
