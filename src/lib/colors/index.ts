import Color from 'color';

export const makeOpaque = (hex: string, amount: number) => {
  return Color(hex)
    .alpha(amount)
    .rgb()
    .string();
};
