/**
 * Main Theme File
 * This is where all variables and colors are defined that can
 * be accessed using props in every component
 */

interface FontSizeResponsive {
  xs: string;
  md: string;
  lg: string;
}

export type Colors =
  | 'primary'
  | 'black'
  | 'blackBetty'
  | 'paintItBlack'
  | 'darkSmoke'
  | 'blueSmoke'
  | 'lightBlueSmoke'
  | 'macyGrey'
  | 'darkGrey'
  | 'silverSprings'
  | 'whiteDenim'
  | 'green900'
  | 'green800'
  | 'green700'
  | 'green600'
  | 'green500'
  | 'green400'
  | 'green300'
  | 'green200'
  | 'green100'
  | 'green50'
  | 'redRedWine'
  | 'greenOnions'
  | 'greenGarden'
  | 'blueChristmas'
  | 'purpleHaze'
  | 'purplePills'
  | 'checkBerry'
  | 'blueMagic'
  | 'brownSugar'
  | 'pinkTriangle'
  | 'royalBlood'
  | 'peaches'
  | 'orangeCrush'
  | 'mellowYellow'
  | 'yellowSubmarine';

export default interface Theme {
  colors: {
    primary: string;

    // blacks & greys
    black: string;
    backToBlack: string;
    blackBetty: string;
    paintItBlack: string;
    darkSmoke: string;
    blueSmoke: string;
    lightBlueSmoke: string;
    macyGrey: string;
    darkGrey: string;
    silverSprings: string;
    whiteDenim: string;

    // green variations
    green900: string;
    green800: string;
    green700: string;
    green600: string;
    green500: string;
    green400: string;
    green300: string;
    green200: string;
    green100: string;
    green50: string;

    // additional
    greenOnions: string;
    greenGarden: string;
    purpleHaze: string;
    blueChristmas: string;
    purplePills: string;
    checkBerry: string;
    blueMagic: string;
    brownSugar: string;
    pinkTriangle: string;
    royalBlood: string;
    redRedWine: string;
    peaches: string;
    orangeCrush: string;
    mellowYellow: string;
    yellowSubmarine: string;
  };

  fonts: {
    regular: string;
  };
  fontSizes: {
    base: string;
    h1: FontSizeResponsive;
    h2: FontSizeResponsive;
    h3: FontSizeResponsive;
    h4: FontSizeResponsive;
    h5: FontSizeResponsive;
    h6: FontSizeResponsive;
    title: FontSizeResponsive;
    body1: string;
    body2: string;
    overline: string;
    caption: string;
    button: string;
    formGroupLabel: string;
  };

  media: any;

  ruler: number[];
  zIndex: {
    navbar: number;
  };

  dimensions: {
    inputHeight: string;
    buttonHeight: string;
    radioBox: string;
    containerWidth: {
      small: string;
      default: string;
      large: string;
      fullscreen: string;
    };

    button: {
      small: {
        height: string;
        padding: string;
      };

      default: {
        height: string;
        padding: string;
      };
    };
    navbarHeight: {
      lg: string;
      md: string;
      xs: string;
    };
  };

  borderRadius: {
    default: string;
    large: string;
    button: string;
    input: string;
  };
  utils: {
    transition: (a?: string) => string;
  };
}
