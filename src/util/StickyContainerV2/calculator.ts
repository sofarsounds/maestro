/**
 * Calculate the position of the container
 */
type WindowSize = number[];
interface AnchorEl {
  width: number;
  height: number;
  left: number;
  top: number;
}

type Position = 'top' | 'bottom' | 'left' | 'right';

interface AnchorOrigin {
  vertical?: string;
  horizontal?: string;
}

interface TransformOrigin {
  vertical?: string;
  horizontal?: string;
}

interface PopoverDomEl {
  width: number;
  height: number;
}

// Calculate an elements center coordinates based on top/left position and width/height
export const calcElCenter = (anchorEl: AnchorEl) => {
  return [
    anchorEl.left + anchorEl.width / 2,
    anchorEl.top - anchorEl.height / 2
  ];
};

export const calculateContainerPosition = (
  windowSize: WindowSize,
  anchorEl: AnchorEl,
  anchorOrigin: AnchorOrigin,
  transformOrigin: TransformOrigin,
  popoverEl: PopoverDomEl
) => {
  const anchorElCenter = calcElCenter(anchorEl);

  let popoverX = 0;
  let popoverY = 0;

  const { vertical = 'bottom', horizontal = 'left' } = anchorOrigin;
  const {
    vertical: transformVertical = 'bottom',
    horizontal: transformHorizontal = 'right'
  } = transformOrigin;

  const verticalTop = anchorEl.top - popoverEl.height;
  const verticalCenter =
    anchorEl.top + anchorEl.height / 2 - popoverEl.height / 2;
  const verticalBottom = anchorEl.top + anchorEl.height;

  const horizontalLeft = anchorEl.left; // - anchorEl.width - anchorEl.width;
  const horizontalCenter =
    anchorEl.left + anchorEl.width / 2 - popoverEl.width / 2;
  const horizontalRight = anchorEl.left + anchorEl.width;

  if (vertical === 'top') {
    popoverY = verticalTop;

    if (transformVertical === 'top') {
      popoverY += popoverEl.height;
    }

    if (transformVertical === 'center') {
      popoverY += popoverEl.height / 2;
    }
  }

  if (vertical === 'center') {
    popoverY = verticalCenter;

    if (transformVertical === 'top') {
      popoverY += popoverEl.height / 2;
    }

    if (transformVertical === 'bottom') {
      popoverY -= popoverEl.height / 2;
    }
  }

  if (vertical === 'bottom') {
    popoverY = verticalBottom;

    if (transformVertical === 'center') {
      popoverY -= popoverEl.height / 2;
    }

    if (transformVertical === 'bottom') {
      popoverY -= popoverEl.height;
    }
  }

  if (horizontal === 'left') {
    popoverX = horizontalLeft;

    if (transformHorizontal === 'center') {
      popoverX -= popoverEl.width / 2;
    }

    if (transformHorizontal === 'right') {
      popoverX -= popoverEl.width;
    }
  }

  if (horizontal === 'center') {
    popoverX = horizontalCenter;

    if (transformHorizontal === 'left') {
      popoverX += popoverEl.width / 2;
    }

    if (transformHorizontal === 'right') {
      popoverX -= popoverEl.width / 2;
    }
  }

  if (horizontal === 'right') {
    popoverX = horizontalRight - popoverEl.width;

    if (transformHorizontal === 'left') {
      popoverX += popoverEl.width;
    }

    if (transformHorizontal === 'center') {
      popoverX += popoverEl.width / 2;
    }
  }

  return {
    x: popoverX,
    y: popoverY,
    width: popoverEl.width,
    height: popoverEl.height
  };
};
