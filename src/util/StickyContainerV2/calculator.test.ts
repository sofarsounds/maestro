import { calcElCenter, calculateContainerPosition } from './calculator';

describe('<StickyContainerV2 />', () => {
  it('calculates the center of an element', () => {
    expect(calcElCenter({ width: 100, height: 50, x: 200, y: 200 })).toEqual([
      250,
      175
    ]);
  });

  describe('calculateContainerPosition', () => {
    const windowSize = [1024, 768];
    const StickToDomElement = {
      width: 100,
      height: 50,
      x: 200,
      y: 500
    };
    const PopoverDom = {
      width: 200,
      height: 100
    };

    it('calculates the correct position for "top" positioning', () => {
      const pos = calculateContainerPosition(
        windowSize,
        StickToDomElement,
        'top',
        PopoverDom
      );

      expect(pos).toEqual({ x: 150, y: 400, width: 200, height: 100 });
    });

    it('calculates the correct position for "bottom" positioning', () => {
      const pos = calculateContainerPosition(
        windowSize,
        StickToDomElement,
        'bottom',
        PopoverDom
      );

      expect(pos).toEqual({ x: 150, y: 550, width: 200, height: 100 });
    });

    it('calculates the correct position for "left" positioning', () => {
      const pos = calculateContainerPosition(
        windowSize,
        StickToDomElement,
        'left',
        PopoverDom
      );

      expect(pos).toEqual({ x: 0, y: 475, width: 200, height: 100 });
    });

    it('calculates the correct position for "right" positioning', () => {
      const pos = calculateContainerPosition(
        windowSize,
        StickToDomElement,
        'right',
        PopoverDom
      );

      expect(pos).toEqual({ x: 300, y: 475, width: 200, height: 100 });
    });
  });
});
