import { makeOpaque } from './color';

describe('Lib', () => {
  describe('Color', () => {
    it('turns a given hexcode into rgba with opacity applied', () => {
      expect(makeOpaque('#000000', 0.5)).toBe('rgba(0, 0, 0, 0.5)');
    });
  });
});
