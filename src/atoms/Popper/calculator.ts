/**
 * Calculate the position of the container
 */
type WindowSize = number[];
export interface AnchorEl {
  width: number;
  height: number;
  left: number;
  top: number;
}

export interface AnchorOrigin {
  vertical?: string;
  horizontal?: string;
}

export interface TransformOrigin {
  vertical?: string;
  horizontal?: string;
}

export interface Offset {
  vertical?: number;
  horizontal?: number;
}

export interface KeepInViewPort {
  vertical?: boolean;
  horizontal?: boolean;
}

export interface PopoverDomEl {
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
  popoverEl: PopoverDomEl,
  keepInViewPort?: KeepInViewPort,
  flip?: boolean,
  offset?: Offset
) => {
  const [windowWidth, windowHeight] = windowSize;

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

  const horizontalLeft = anchorEl.left;
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

  /**
   * Adjust coordinates if user wants to keep element in the viewport
   */
  if (keepInViewPort && keepInViewPort.horizontal) {
    if (popoverX < 0) {
      popoverX = 0;
    }

    if (popoverX + popoverEl.width > windowWidth) {
      popoverX = windowWidth - popoverEl.width;
    }
  }

  if (keepInViewPort && keepInViewPort.vertical) {
    if (popoverY < 0) {
      popoverY = 0;
    }

    if (popoverY + popoverEl.height > windowHeight) {
      popoverY = windowHeight - popoverEl.height;
    }
  }

  let isFlipped = false;
  /**
   * Flip the positioning when there's not enough space in the viewport
   */
  if (flip) {
    if (popoverX < 0) {
      popoverX = anchorEl.left + anchorEl.width;
    }

    if (popoverX + popoverEl.width > windowWidth) {
      popoverX = anchorEl.left - popoverEl.width;
    }

    if (popoverY < 0) {
      popoverY = anchorEl.top + anchorEl.height;
      isFlipped = true;
    }

    if (popoverY + popoverEl.height > windowHeight) {
      popoverY = anchorEl.top - popoverEl.height;
      isFlipped = true;
    }
  }

  /**
   * Adjust if an offset has been set
   */
  if (offset) {
    if (offset.vertical) {
      if (isFlipped) {
        popoverY -= offset.vertical;
      } else {
        popoverY += offset.vertical;
      }
    }

    if (offset.horizontal) {
      if (isFlipped) {
        popoverX -= offset.horizontal;
      } else {
        popoverX += offset.horizontal;
      }
    }
  }

  return {
    x: popoverX,
    y: popoverY,
    width: anchorEl.width,
    height: popoverEl.height,
    isFlipped
  };
};
