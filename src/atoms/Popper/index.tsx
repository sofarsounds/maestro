import React, { useCallback, useRef, useEffect, useState } from 'react';
import styled from '../../lib/styledComponents';

import { useScrollPosition, useWindowSize } from '../../hooks';
import { getPosition } from '../../hooks/usePosition';
import {
  AnchorOrigin,
  TransformOrigin,
  Offset,
  PopoverDomEl,
  calculateContainerPosition
} from './calculator';

export interface KeepInViewPort {
  vertical?: boolean;
  horizontal?: boolean;
}

export interface PopperProps {
  anchorOrigin?: AnchorOrigin;
  transformOrigin?: TransformOrigin;
  offset?: Offset;
  keepInViewPort?: KeepInViewPort;
  flip?: boolean;
  reactToChange?: number | boolean;
  width?: string;
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
  keepInViewPort = { vertical: false, horizontal: false },
  flip = false,
  children,
  reactToChange,
  width
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
        zIndex: 90,
        position: 'fixed',
        width: width === 'auto' ? anchorElWidth : width
      }
    });
  }

  return (
    <Container
      ref={popoverRef}
      style={{
        top: `${y}px`,
        left: `${x}px`,
        zIndex: 90,
        position: 'fixed',
        width: width === 'auto' ? anchorElWidth : width
      }}
    >
      {typeof children === 'function' ? children({ isFlipped }) : children}
    </Container>
  );
};

export default Popper;
