import { css } from '../lib/styledComponents';

import ITheme from '../typings/theme';

const breakPoints = {
  phone: 0,
  tablet: 768,
  desktop: 992
};

const theme: ITheme = {
  colours: {
    primary: '#008736',

    // blacks & greys
    backToBlack: '#111111',
    blackBetty: '#1E1E1E',
    paintItBlack: '#333333',
    blueSmoke: '#949494',
    macyGrey: '#DBDBDB',
    silverSprings: '#F5F5F5',
    whiteDenim: '#FFFFFF',

    // green variations
    green900: '#006721',
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
    fontFamily: 'Open Sans'
  },
  fontSizes: {
    base: '16px',
    h1: '96px',
    h2: '82px',
    h3: '65px',
    h4: '46px',
    h5: '33px',
    h6: '27px',
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
  }, {})
};

export default theme;
