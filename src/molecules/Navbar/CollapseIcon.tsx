import React from 'react';
import styled, { css, keyframes } from '../../lib/styledComponents';

interface Props {
  onClick: () => void;
  open?: boolean;
}

const time = '0.15s';
const delay = '.25s';
const cubic = 'cubic-bezier(.25, .73, .85, .56)';
const height = 30;

const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
`;

const animateUp = keyframes`
  0% {
    transform: rotate(0deg);
  }
100% {
    transform: rotate(-45deg);
}
`;

const Line = styled.span`
  display: block;
  position: absolute;
  height: 2px;
  width: 20px;
  background: #fff;
  border-radius: 1px;
  transition: all ${time} ${cubic};
  opacity: 1;
  left: 5px;
`;

const Hamburger = styled.div<Props>`
  width: ${height}px;
  height: ${height}px;
  position: relative;
  cursor: pointer;
  box-sizing: content-box;

  ${({ theme }) => theme.media.md`
    display: none;
  `}

  ${Line}:nth-child(1) {
    top: ${height / 2 - 3}px;
  }

  ${Line}:nth-child(2) {
    top: ${height / 2 + 2}px;
  }

  ${({ open }) =>
    open &&
    css`
      ${Line}:nth-child(1) {
        top: ${height / 2}px;
        transform-origin: center;
        animation: ${animate} ${time} ${cubic} ${delay} 1 normal forwards;
      }

      ${Line}:nth-child(2) {
        top: ${height / 2}px;
        transform-origin: center;
        animation: ${animateUp} ${time} ${cubic} ${delay} 1 normal forwards;
      }
    `}
`;

const CollapsibleIcon: React.SFC<Props> = ({ onClick, open }) => (
  <Hamburger onClick={onClick} open={open}>
    <Line />
    <Line />
  </Hamburger>
);

export default CollapsibleIcon;
