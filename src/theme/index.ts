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
  fonts: {
    regular: 'Open Sans'
  },

  colors: {
    primary: '#039842',

    // blacks & greys
    black: '#000000',
    backToBlack: '#111111',
    blackBetty: '#1E1E1E',
    paintItBlack: '#333333',
    darkSmoke: '#767676',
    blueSmoke: '#949494',
    lightBlueSmoke: '#94949499',
    macyGrey: '#DBDBDB',
    darkGrey: '#535353',
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
    greenOnions: '#8BC34B',
    greenGarden: '#19BC9B',
    blueChristmas: '#3498DB',
    purpleHaze: '#3F51B5',
    purplePills: '#9B59B6',
    checkBerry: '#98035A',
    blueMagic: '#34495E',
    brownSugar: '#9B525F',
    pinkTriangle: '#E91E63',
    royalBlood: '#FF5000',
    redRedWine: '#EF4423',
    peaches: '#F99973',
    orangeCrush: '#F39C12',
    mellowYellow: '#F1C410',
    yellowSubmarine: '#FFD426'
  },
  fontSizes: {
    base: '16px',
    title: { lg: '54px', md: '38px', xs: '26px' },
    h1: { lg: '48px', md: '34px', xs: '24px' },
    h2: { lg: '34px', md: '24px', xs: '20px' },
    h3: { lg: '24px', md: '20px', xs: '16px' },
    h4: { lg: '20px', md: '16px', xs: '16px' },
    h5: { lg: '16px', md: '14px', xs: '14px' },
    h6: { lg: '14px', md: '14px', xs: '14px' },
    body1: '16px',
    body2: '14px',
    overline: '10px',
    caption: '10px',
    button: '14px',
    formGroupLabel: '14px'
  },

  media: Object.keys(breakPoints).reduce((acc, label: string) => {
    acc[label] = (...args: any) => css`
      @media (min-width: ${breakPoints[label]}px) {
        // @ts-ignore
        ${css.call(undefined, ...args)};
      }
    `;
    return acc;
  }, {}),

  ruler: Array.from({ length: 21 }, (_e, i) => i * 4),
  zIndex: {
    navbar: 100
  },

  dimensions: {
    inputHeight: '44px',
    buttonHeight: '44px',
    radioBox: '20px',
    containerWidth: {
      small: '600px',
      default: '800px',
      large: '1000px',
      fullscreen: '100%'
    },

    button: {
      small: {
        height: '40px',
        padding: '0 15px'
      },

      default: {
        height: '44px',
        padding: '0 25px'
      }
    },

    navbarHeight: {
      lg: '84px',
      md: '74px',
      xs: '62px'
    }
  },

  borderRadius: {
    default: '2px',
    large: '8px',
    button: '4px',
    input: '2px'
  },

  utils: {
    transition: (attr?: string) => `${attr || 'all'} .2s ease`
  }
};

export default theme;
