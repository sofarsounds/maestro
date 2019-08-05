import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { calculateContainerPosition } from './calculator';

const Container = styled.div<any>`
  background: #ccc;
  border: 1px solid #aaa;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ calculated }) => css`
    position: fixed;
    top: ${calculated.y}px;
    left: ${calculated.x}px;
  `}
`;

const StickyContainerV2: React.SFC<any> = ({
  anchorEl,
  position,
  children
}) => {
  const windowWidth = [window.innerWidth, window.innerHeight];

  if (!anchorEl) {
    return null;
  }

  const anchor = {
    width: 100,
    height: 100,
    x: 403,
    y: 164
  };

  const popoverEl = {
    width: 200,
    height: 50
  };

  const pos = calculateContainerPosition(
    windowWidth,
    anchor,
    position,
    popoverEl
  );

  return <Container calculated={pos}>{children}</Container>;
};

export default StickyContainerV2;
