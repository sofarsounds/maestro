import { css } from '../lib/styledComponents';

import Theme from '../typings/theme';

// breakpoints define the minimum width of a device (>=)
export const breakPoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

const theme: Theme = {
  colours: {
    primary: '#039842',

    // blacks & greys
    black: '#000000',
    backToBlack: '#111111',
    blackBetty: '#1E1E1E',
    paintItBlack: '#333333',
    blueSmoke: '#949494',
    macyGrey: '#DBDBDB',
    silverSprings: '#F5F5F5',
    whiteDenim: '#FFFFFF',

    // green variations
    green900: '#006721',
    green800: '#008736',
    green700: '#039842',
    green600: '#10AD52',
    green500: '#23BA57',
    green400: '#4FC571',
    green300: '#72D08A',
    green200: '#9DDCAC',
    green100: '#CFEACC',
    green50: '#E6F7EA',

    // additional
    redRedWine: '#EF4423'
  },

  fonts: {
    regular: 'Open Sans'
  },
  fontSizes: {
    base: '16px',
    h1: '96px',
    h2: '60px',
    h3: '48px',
    h4: '34px',
    h5: '24px',
    h6: '20px',
    title: '74px',
    subtitle1: '16px',
    subtitle2: '14px',
    body1: '16px',
    body2: '14px',
    overline: '10px',
    caption: '10px',
    button: '14px'
  },

  media: Object.keys(breakPoints).reduce((acc, label: string) => {
    acc[label] = (...args: any) => css`
      @media (min-width: ${breakPoints[label]}px) {
        ${css.call(undefined, ...args)};
      }
    `;
    return acc;
  }, {}),

  ruler: Array.from({ length: 21 }, (e, i) => i * 4),
  dimensions: {
    inputHeight: '44px',
    buttonHeight: '44px',
    // TODO need to work with design on what the container widths
    // should actually be
    containerWidth: {
      small: '600px',
      default: '800px',
      large: '1000px',
      fullscreen: '100%'
    }
  },

  borderRadius: {
    button: '4px',
    input: '2px'
  },

  utils: {
    transition: (attr?: string) => `${attr || 'all'} .2s ease`
  }
};

export default theme;
