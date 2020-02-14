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

export interface PopperProps {
  anchorOrigin?: AnchorOrigin;
  transformOrigin?: TransformOrigin;
  offset?: Offset;
  keepInViewPort?: boolean;
  flip?: boolean;
  width?: string;
}

interface PopperReturnProps {
  contactPoint: string;
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
  contactPoint: string;
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
  width = 'auto'
}) => {
  const popoverRef = useRef<HTMLDivElement>();
  const [calculatedPosition, setCalculatedPosition] = useState<
    CalculatedPosition
  >({
    x: -10000,
    y: -10000,
    width: 0,
    height: 0,
    contactPoint: 'bottom'
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

  const { y, x, contactPoint } = calculatedPosition;

  return (
    <Container
      ref={popoverRef}
      style={{
        top: `${y}px`,
        left: `${x}px`,
        width: width === 'auto' ? 'undefined' : width
      }}
    >
      {typeof children === 'function' ? children({ contactPoint }) : children}
    </Container>
  );
};

export default Popper;
