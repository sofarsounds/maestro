import Color from 'color';

export default {
  colors: {
    primary: '#3498db',
    secondary: '#8e44ad',
    white: '#ffffff'
  },
  utils: {
    borderRadius: '4px',
    transition: () => `all .25s ease`,
    darken: (hex: string, factor: number = 1) =>
      Color(hex)
        .darken(0.2 * factor)
        .hex()
  }
};
