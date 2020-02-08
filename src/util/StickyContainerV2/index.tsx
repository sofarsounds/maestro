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

export interface StickyContainerProps {
  anchorOrigin?: AnchorOrigin;
  transformOrigin?: TransformOrigin;
  offset?: Offset;
  keepInViewPort?: boolean;
  width?: string;
}

interface Props extends StickyContainerProps {
  anchorEl: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
}

const Container = styled.div<{ ref?: any }>`
  z-index: ${({ theme }) => theme.zIndex.navbar + 1};
  position: fixed;
`;

interface CalculatedPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

const StickyContainerV2: React.SFC<Props> = ({
  anchorEl,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
  offset,
  keepInViewPort = false,
  children,
  width = 'auto'
}) => {
  const popoverRef = useRef<HTMLDivElement>();
  const [calculatedPosition, setCalculatedPosition] = useState<
    CalculatedPosition
  >({
    x: -10000,
    y: -10000,
    width: 0,
    height: 0
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
      keepInViewPort
    ]
  );

  useEffect(() => {
    if (popoverRef.current) {
      setPopoverElRect(getPosition(popoverRef.current));
    }
  }, [popoverRef]);

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

  const { y, x, width: anchorElWidth } = calculatedPosition;

  return (
    <Container
      ref={popoverRef}
      style={{
        top: `${y}px`,
        left: `${x}px`,
        width: width === 'auto' ? anchorElWidth : width
      }}
    >
      {children}
    </Container>
  );
};

export default StickyContainerV2;
