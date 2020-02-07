import React from 'react';
import theme from '../../theme';
import { checkStyleRules, renderWithTheme } from '../../test';
import Menu from './';

const setup = ({ width, bordered = false, depth }: any) =>
  renderWithTheme(
    <Menu data-qaid="option" width={width} bordered={bordered} depth={depth}>
      I am the content
    </Menu>
  );

describe('<Menu />', () => {
  it('renders the correct content', () => {
    const { container } = setup({});
    expect(container).toHaveTextContent('I am the content');
  });

  it('has the correct style attributes', () => {
    const {
      container: { firstChild }
    } = setup({});

    checkStyleRules(firstChild, {
      margin: '0',
      padding: '0',
      'border-radius': theme.borderRadius.default,
      width: 'auto',
      'background-color': theme.colors.whiteDenim,
      'max-height': '300px',
      'overflow-y': 'auto',
      '-webkit-overflow-scrolling': 'touch',
      'box-shadow': '0 10px 20px 0 rgba(0,0,0,0.19)'
    });
  });

  it('renders correctly with a custom width prop', () => {
    const {
      container: { firstChild }
    } = setup({ width: '50px' });

    checkStyleRules(firstChild, {
      width: '50px'
    });
  });

  it('renders correctly with custom shadow depth', () => {
    const {
      container: { firstChild }
    } = setup({ depth: 1 });

    checkStyleRules(firstChild, {
      'box-shadow': '0 1px 3px 0 rgba(0,0,0,0.1)'
    });
  });

  it('renders correctly with the bordered prop', () => {
    const {
      container: { firstChild }
    } = setup({ bordered: true });

    checkStyleRules(firstChild, {
      border: `1px solid ${theme.colors.macyGrey}`
    });
  });
});
