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
  color?: string;
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
    color: ${({ color }) => color || '#000'};
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
  color?: string;
  className?: string;
  'data-qaid'?: string;
  id?: string;
}
const Icon: React.SFC<IconProps> = ({
  name,
  size,
  color,
  className = '',
  'data-qaid': qaId,
  id
}) => (
  <IconElement
    id={id}
    className={`icon-${name} ${className}`}
    size={size}
    color={color}
    data-qaid={qaId}
  />
);

export default Icon;
