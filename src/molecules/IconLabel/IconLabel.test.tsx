import React from 'react';
import { renderWithTheme, checkStyleRules } from '../../test';
import theme from '../../theme';
import IconLabel from './index';

const setup = (props: any) =>
  renderWithTheme(<IconLabel invertIcon={false} draft={false} {...props} />);

describe('<IconLabel />', () => {
  it('renders the empty state correctly', () => {
    const { queryByTestId } = setup({});
    expect(queryByTestId('iconlabel-icon-wrapper')).toBeInTheDocument();
    checkStyleRules(queryByTestId('iconlabel-icon-wrapper'), {
      'background-color': theme.colors.macyGrey
    });
    expect(queryByTestId('iconlabel-icon')).toHaveClass('icon-plus');
  });

  it('renders the draft state with the right styles', () => {
    const { queryByTestId } = setup({ draft: true, labelText: 'Venue Text' });
    expect(queryByTestId('iconlabel-icon-wrapper')).toBeInTheDocument();
    expect(queryByTestId('iconlabel-text')).toBeInTheDocument();
    expect(queryByTestId('iconlabel-text')).toHaveTextContent('Venue Text');
    checkStyleRules(queryByTestId('iconlabel-icon-wrapper'), {
      'background-color': theme.colors.whiteDenim
    });
    expect(queryByTestId('iconlabel-icon')).toHaveClass('icon-loading');
  });

  it('renders the correct icon-wrapper when icon and color are set', () => {
    const { queryByTestId } = setup({
      labelText: 'Venue Text',
      color: 'purplePills',
      icon: 'party'
    });
    expect(queryByTestId('iconlabel-icon-wrapper')).toBeInTheDocument();
    expect(queryByTestId('iconlabel-text')).toBeInTheDocument();
    expect(queryByTestId('iconlabel-text')).toHaveTextContent('Venue Text');
    checkStyleRules(queryByTestId('iconlabel-icon-wrapper'), {
      'background-color': theme.colors.whiteDenim
    });
    expect(queryByTestId('iconlabel-icon')).toHaveClass('icon-party');
  });

  it('truncates long label text', () => {
    const { queryByTestId } = setup({
      labelText: 'Long Venue Text',
      color: 'purplePills',
      icon: 'party'
    });
    expect(queryByTestId('iconlabel-icon-wrapper')).toBeInTheDocument();
    expect(queryByTestId('iconlabel-text')).toBeInTheDocument();
    expect(queryByTestId('iconlabel-text')).toHaveTextContent('Long Venue...');
    checkStyleRules(queryByTestId('iconlabel-icon-wrapper'), {
      'background-color': theme.colors.whiteDenim
    });
    expect(queryByTestId('iconlabel-icon')).toHaveClass('icon-party');
  });

  it('renders inverted icon-wrapper when invertIcon set to true', () => {
    const { queryByTestId } = setup({
      labelText: 'Venue Text',
      color: 'purplePills',
      icon: 'party',
      invertIcon: true
    });
    expect(queryByTestId('iconlabel-icon-wrapper')).toBeInTheDocument();
    expect(queryByTestId('iconlabel-text')).toBeInTheDocument();
    expect(queryByTestId('iconlabel-text')).toHaveTextContent('Venue Text');
    checkStyleRules(queryByTestId('iconlabel-icon-wrapper'), {
      'background-color': theme.colors.purplePills
    });
    expect(queryByTestId('iconlabel-icon')).toHaveClass('icon-party');
  });

  it('renders the image-wrapper when imageUrl is passed in', () => {
    const { queryByTestId } = setup({
      labelText: 'Venue Text',
      imageUrl: 'http://cdn.com/image.jpg',
      invertIcon: true
    });
    expect(queryByTestId('iconlabel-image-wrapper')).toBeInTheDocument();
    expect(queryByTestId('iconlabel-text')).toBeInTheDocument();
    expect(queryByTestId('iconlabel-text')).toHaveTextContent('Venue Text');
    expect(queryByTestId('iconlabel-image')).toHaveProperty(
      'src',
      'http://cdn.com/image.jpg'
    );
  });
});
