/**
 * Main Theme File
 * This is where all variables and colours are defined that can
 * be accessed using props in every component
 *
 * @TODO the colours collection on the zeplin guide is ridiculous so I left out any
 * colours that weren't used.
 *
 * @TODO fontSizes.. Are really ALL off the different headings being used? 2 types for body and
 * subtitle? We should maybe have a look at making this a bit easier.
 */

export default interface Theme {
  colours: {
    primary: string;

    // blacks & greys
    black: string;
    backToBlack: string;
    blackBetty: string;
    paintItBlack: string;
    blueSmoke: string;
    macyGrey: string;
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
    redRedWine: string;
  };

  fonts: {
    regular: string;
  };
  fontSizes: {
    base: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    title: string;
    subtitle1: string;
    subtitle2: string;
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
    button: string;
    input: string;
  };
  utils: {
    transition: (a?: string) => string;
  };
}
