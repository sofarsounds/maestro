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

interface ITheme {
  colours: {
    primary: string;

    // blacks & greys
    backToBlack: string;
    blackBetty: string;
    paintItBlack: string;
    blueSmoke: string;
    macyGrey: string;
    silverSprings: string;
    whiteDenim: string;

    // green variations
    green900: string;
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
    fontFamily: string;
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
  };

  media: any;
}

export default ITheme;
