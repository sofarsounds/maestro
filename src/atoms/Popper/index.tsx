import React, { useCallback, useRef, useEffect, useState } from 'react';
import styled from '../../lib/styledComponents';

import { useScrollPosition, useWindowSize } from '../../hooks';
import { getPosition } from '../../hooks/usePosition';
import {
  AnchorOrigin,
  KeepInViewPort,
  TransformOrigin,
  Offset,
  PopoverDomEl,
  calculateContainerPosition
} from './calculator';

export interface PopperProps {
  anchorOrigin?: AnchorOrigin;
  transformOrigin?: TransformOrigin;
  offset?: Offset;
  keepInViewPort?: KeepInViewPort | boolean;
  flip?: boolean;
  reactToChange?: number | boolean;
  width?: string;
  zIndex?: number;
}

interface Props extends PopperProps {
  anchorEl: any;
  children: any;
}

interface CalculatedPosition {
  x: number;
  y: number;
  width: number;
  height: number;
  isFlipped: boolean;
}

const Container = styled.div<{ ref?: any }>`
  z-index: ${({ theme }) => theme.zIndex.navbar + 1};
  position: fixed;
`;

const Popper: React.SFC<Props> = ({
  anchorEl,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
  offset,
  keepInViewPort = false,
  flip = false,
  children,
  reactToChange,
  width,
  zIndex = 500
}) => {
  const popoverRef = useRef<HTMLDivElement>();
  const [calculatedPosition, setCalculatedPosition] = useState<
    CalculatedPosition
  >({
    x: -10000,
    y: -10000,
    width: 0,
    height: 0,
    isFlipped: false
  });
  const [popoverElRect, setPopoverElRect] = useState<PopoverDomEl>({
    width: 0,
    height: 0
  });
  const windowSize = useWindowSize();

  const updateCalculatedPosition = useCallback(
    (updatedAnchorEl: React.RefObject<HTMLDivElement>) => {
      if (updatedAnchorEl.current) {
        const pos = getPosition(updatedAnchorEl.current);

        const calculated = calculateContainerPosition(
          windowSize,
          pos,
          anchorOrigin,
          transformOrigin,
          popoverElRect,
          keepInViewPort,
          flip,
          offset
        );

        setCalculatedPosition(calculated);
      }
    },
    [
      windowSize,
      anchorOrigin,
      transformOrigin,
      popoverElRect,
      offset,
      keepInViewPort,
      flip
    ]
  );

  useEffect(() => {
    if (popoverRef.current) {
      setPopoverElRect(getPosition(popoverRef.current));
    }
  }, [popoverRef, reactToChange]);

  useEffect(() => {
    updateCalculatedPosition(anchorEl);
  }, [
    anchorEl,
    popoverElRect,
    anchorOrigin,
    transformOrigin,
    updateCalculatedPosition,
    windowSize
  ]);

  useScrollPosition(() => {
    updateCalculatedPosition(anchorEl);
  });

  const { y, x, isFlipped, width: anchorElWidth } = calculatedPosition;

  if (typeof children === 'function') {
    return children({
      ref: popoverRef,
      isFlipped,
      style: {
        top: `${y}px`,
        left: `${x}px`,
        position: 'fixed',
        width: width === 'auto' ? anchorElWidth : width,
        zIndex
      }
    });
  }

  return (
    <Container
      ref={popoverRef}
      style={{
        top: `${y}px`,
        left: `${x}px`,
        position: 'fixed',
        width: width === 'auto' ? anchorElWidth : width,
        zIndex
      }}
    >
      {typeof children === 'function' ? children({ isFlipped }) : children}
    </Container>
  );
};

export default Popper;
