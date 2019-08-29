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
}

const Container = styled.div<any>`
  position: fixed;
`;

const StickyContainerV2: React.SFC<any> = ({
  anchorEl,
  anchorOrigin,
  transformOrigin,
  offset,
  children
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
          offset
        );

        setCalculatedPosition(calculated);
      }
    },
    [windowSize, anchorOrigin, transformOrigin, popoverElRect, offset]
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

  const { y = -10000, x = -10000 } = calculatedPosition;

  return (
    <Container
      ref={popoverRef}
      style={{
        top: `${y}px`,
        left: `${x}px`
      }}
    >
      {children}
    </Container>
  );
};

export default StickyContainerV2;
