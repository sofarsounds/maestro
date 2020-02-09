import React, { useCallback, useRef, useEffect, useState } from 'react';
import styled from '../../lib/styledComponents';

import { useScrollPosition, useWindowSize } from '../../hooks';
import { getPosition } from '../../hooks/usePosition';
import {
  AnchorOrigin,
  TransformOrigin,
  Offset,
  calculateContainerPosition
} from './calculator';

export interface StickyContainerProps {
  anchorOrigin?: AnchorOrigin;
  transformOrigin?: TransformOrigin;
  offset?: Offset;
  keepInViewPort?: boolean;
  flip?: boolean;
  width?: string;
}

interface Props extends StickyContainerProps {
  anchorEl: any;
  children: any;
}

const Container = styled.div<any>`
  z-index: ${({ theme }) => theme.zIndex.navbar + 1};
  position: fixed;
`;

const StickyContainerV2: React.SFC<Props> = ({
  anchorEl,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
  offset,
  keepInViewPort = false,
  flip = false,
  children,
  width = 'auto'
}) => {
  const popoverRef = useRef<any>();
  const [calculatedPosition, setCalculatedPosition] = useState<any>({});
  const [popoverElRect, setPopoverElRect] = useState<any>({});
  const windowSize = useWindowSize();

  const updateCalculatedPosition = useCallback(
    (updatedAnchorEl: any) => {
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

  const { y = -10000, x = -10000, width: anchorElWidth } = calculatedPosition;

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
