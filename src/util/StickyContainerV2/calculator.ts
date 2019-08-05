/**
 * Calculate the position of the container
 */
type WindowSize = number[];

interface AnchorEl {
  width: number;
  height: number;
  x: number;
  y: number;
}

type Position = 'top' | 'bottom' | 'left' | 'right';

interface PopoverDomEl {
  width: number;
  height: number;
}

// Calculate an elements center coordinates based on top/left position and width/height
export const calcElCenter = (anchorEl: AnchorEl) => {
  return [anchorEl.x + anchorEl.width / 2, anchorEl.y - anchorEl.height / 2];
};

export const calculateContainerPosition = (
  windowSize: WindowSize,
  anchorEl: AnchorEl,
  position: Position,
  popoverEl: PopoverDomEl
) => {
  const anchorElCenter = calcElCenter(anchorEl);

  let popoverX = anchorElCenter[0] - popoverEl.width / 2;
  let popoverY = 0;

  if (position === 'top') {
    popoverY = anchorEl.y - popoverEl.height;
  }
  if (position === 'bottom') {
    popoverY = anchorEl.y + anchorEl.height;
  }

  if (position === 'left') {
    popoverY = anchorEl.y + anchorEl.height / 2 - popoverEl.height / 2;
    popoverX = anchorEl.x - anchorEl.width - anchorEl.width;
  }

  if (position === 'right') {
    popoverY = anchorEl.y + anchorEl.height / 2 - popoverEl.height / 2;
    popoverX = anchorEl.x + anchorEl.width;
  }

  return {
    x: popoverX,
    y: popoverY,
    width: popoverEl.width,
    height: popoverEl.height
  };
};
