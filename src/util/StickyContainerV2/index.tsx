import React, { useCallback, useRef, useEffect, useState } from 'react';
import styled from '../../lib/styledComponents';

import { useScrollPosition, useWindowSize } from '../../hooks';
import { getPosition } from '../../hooks/usePosition';
import { calculateContainerPosition } from './calculator';

const Container = styled.div<any>`
  background: #ccc;
  border: 1px solid #aaa;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const StickyContainerV2: React.SFC<any> = ({
  anchorEl,
  position,
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
          position,
          popoverElRect
        );

        setCalculatedPosition(calculated);
      }
    },
    [popoverElRect, position, windowSize]
  );

  useEffect(() => {
    if (popoverRef.current) {
      setPopoverElRect(getPosition(popoverRef.current));
    }
  }, [popoverRef]);

  useEffect(() => {
    updateCalculatedPosition(anchorEl);
  }, [anchorEl, popoverElRect, position, updateCalculatedPosition, windowSize]);

  useScrollPosition(() => {
    updateCalculatedPosition(anchorEl);
  });

  return (
    <Container
      ref={popoverRef}
      style={{
        top: `${calculatedPosition.y}px`,
        left: `${calculatedPosition.x}px`
      }}
    >
      {children}
    </Container>
  );
};

export default StickyContainerV2;
