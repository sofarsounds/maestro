import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import Registry from './registry';

const keys: string[] = Object.keys(Registry);

const generateIcons = () => {
  let styles = '';

  keys.map((k: string) => {
    styles += `
      &.icon-${k}:before {
        content: '\\${Registry[k]}';
      }
    `;
  });

  return css`
    ${styles}
  `;
};

const IconElement = styled.i<{
  className: string;
  size?: string;
  colour?: string;
}>`
  font-family: 'sofarsounds-icon-font' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:before {
    color: ${({ colour }) => colour || '#000'};
  }

  ${({ size }) =>
    size &&
    css`
      font-size: ${size};
    `}

  ${generateIcons()};
`;

interface IconProps {
  name: string;
  size?: string;
  colour?: string;
  className?: string;
}
const Icon: React.SFC<IconProps> = ({ name, size, colour, className = '' }) => (
  <IconElement
    className={`icon-${name} ${className}`}
    size={size}
    colour={colour}
  />
);

export default Icon;
