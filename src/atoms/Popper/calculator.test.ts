import { calcElCenter, calculateContainerPosition } from './calculator';

const windowSize = [1024, 768];
const genStickTo = (props: number[]) => ({
  width: props[0],
  height: props[1],
  left: props[2],
  top: props[3]
});

const Popover = {
  width: 100,
  height: 100
};

const genTestCase = (
  title: string,
  Dom: any,
  origin: any,
  transform: any,
  expected: any
) =>
  it(title, () => {
    const pos = calculateContainerPosition(
      windowSize,
      Dom,
      origin,
      transform || {},
      Popover
    );

    Object.keys(expected).map(key => {
      expect(pos).toHaveProperty(key, expected[key]);
    });
  });

describe('<StickyContainerV2 />', () => {
  it('calculates the center of an element', () => {
    expect(
      calcElCenter({ width: 100, height: 50, left: 200, top: 200 })
    ).toEqual([250, 175]);
  });

  describe('calculateContainerPosition', () => {
    const StickTo = genStickTo([100, 100, 200, 200]);

    const cases = [
      ['top', 'top', 200],
      ['top', 'center', 150],
      ['top', 'bottom', 100],
      ['center', 'top', 250],
      ['center', 'center', 200],
      ['center', 'bottom', 150],
      ['bottom', 'top', 300],
      ['bottom', 'center', 250],
      ['bottom', 'bottom', 200]
    ];

    const horizontalCases = [
      ['left', 'left', 200],
      ['left', 'center', 150],
      ['left', 'right', 100],
      ['center', 'left', 250],
      ['center', 'center', 200],
      ['center', 'right', 150],
      ['right', 'left', 300],
      ['right', 'center', 250],
      ['right', 'right', 200]
    ];

    describe('vertical alignment', () => {
      cases.forEach((c: any) => {
        genTestCase(
          `calculates correct position "${c[0]}" with transform origin ${c[1]}`,
          StickTo,
          { vertical: c[0] },
          { vertical: c[1] },
          {
            y: c[2]
          }
        );
      });
    });

    describe('horizontal alignment', () => {
      horizontalCases.forEach((c: any) => {
        genTestCase(
          `calculates correct position "${c[0]}" with transform origin ${c[1]}`,
          StickTo,
          { horizontal: c[0] },
          { horizontal: c[1] },
          {
            x: c[2]
          }
        );
      });
    });

    describe('Keep in ViewPort', () => {
      it('sticks to the left side of the screen if the container would run out', () => {
        const pos = calculateContainerPosition(
          [350, 500],
          StickTo,
          { horizontal: 'left' },
          { horizontal: 'right' },
          { width: 250, height: 100 },
          true
        );

        expect(pos).toHaveProperty('x', 0);
      });

      it('sticks to the right side of the screen if the container would run out', () => {
        const pos = calculateContainerPosition(
          [350, 500],
          StickTo,
          { horizontal: 'right' },
          { horizontal: 'left' },
          { width: 250, height: 100 },
          true
        );

        expect(pos).toHaveProperty('x', 100);
      });

      it('flips the positioning vertically if there is not enough space above for the popover', () => {
        const pos = calculateContainerPosition(
          [350, 1000],
          StickTo,
          { vertical: 'top', horizontal: 'left' },
          { vertical: 'bottom', horizontal: 'left' },
          { width: 250, height: 250 },
          false,
          true
        );

        expect(pos).toHaveProperty('y', 300);
      });

      it('flips the positioning vertically if there is not enough space below for the popover', () => {
        const pos = calculateContainerPosition(
          [350, 350],
          StickTo,
          { vertical: 'bottom', horizontal: 'left' },
          { vertical: 'top', horizontal: 'left' },
          { width: 250, height: 100 },
          false,
          true
        );

        expect(pos).toHaveProperty('y', 100);
      });

      it('flips the positioning horizontally if there is not enough space on the left for the popover', () => {
        const pos = calculateContainerPosition(
          [1000, 1000],
          StickTo,
          { vertical: 'top', horizontal: 'left' },
          { vertical: 'top', horizontal: 'right' },
          { width: 250, height: 100 },
          false,
          true
        );

        expect(pos).toHaveProperty('x', 300);
      });

      it('flips the positioning horizontally if there is not enough space on the right for the popover', () => {
        const pos = calculateContainerPosition(
          [350, 1000],
          StickTo,
          { vertical: 'top', horizontal: 'right' },
          { vertical: 'top', horizontal: 'left' },
          { width: 100, height: 100 },
          false,
          true
        );

        expect(pos).toHaveProperty('x', 100);
      });
    });

    describe('offset', () => {
      it('adds a vertical offset to the container', () => {
        const pos = calculateContainerPosition(
          windowSize,
          StickTo,
          { horizontal: 'right' },
          { horizontal: 'left' },
          { width: 100, height: 100 },
          false,
          false,
          { vertical: 100 }
        );

        expect(pos).toHaveProperty('y', 300);
      });

      it('adds a horizontal offset to the container', () => {
        const pos = calculateContainerPosition(
          windowSize,
          StickTo,
          { horizontal: 'right' },
          { horizontal: 'left' },
          { width: 100, height: 100 },
          false,
          false,
          { horizontal: 100 }
        );

        expect(pos).toHaveProperty('x', 400);
      });
    });
  });
});
