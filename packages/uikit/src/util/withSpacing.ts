import { css } from 'styled-components';

import theme, { breakPoints } from '../theme';

export interface SpacerProps {
  // global margin & padding
  m?: number | number[];
  p?: number | number[]; // margins
  mt?: number | number[];
  mr?: number | number[];
  mb?: number | number[];
  ml?: number | number[];

  // padding
  pt?: number | number[];
  pr?: number | number[];
  pb?: number | number[];
  pl?: number | number[];
}

export const generateCssProperty = (prop: string, value: string): string => {
  const mapping = {
    m: 'margin',
    p: 'padding',
    t: 'top',
    r: 'right',
    b: 'bottom',
    l: 'left'
  };

  const [key, direction] = prop.split('');
  const cssProp = `${mapping[key]}${direction ? `-${mapping[direction]}` : ''}`;

  return `${cssProp}: ${value};`;
};

const breakPointKeys = Object.keys(breakPoints);
export const generateSpace = (screenSize: string, prop: string, size: any) => {
  if (Array.isArray(size)) {
    let styles: any = [];
    const sizeIndex = breakPointKeys.indexOf(screenSize);

    if (sizeIndex > -1) {
      if (size[sizeIndex]) {
        styles.push(
          generateCssProperty(prop, `${theme.ruler[Number(size[sizeIndex])]}px`)
        );
      }
    }

    return styles;
  }

  return generateCssProperty(prop, `${theme.ruler[Number(size)]}px`);
};

const loop = (screenSize: string, props: any) => {
  let s = '';

  Object.keys(props).forEach((key: string) => {
    if (/^(m|p)(t|b|r|l)?$/.test(key)) {
      s += generateSpace(screenSize, key, props[key]);
    }
  });

  return css`
    ${s}
  `;
};

export default (props: SpacerProps) => css`
  ${loop('xs', props)};

  ${theme.media.sm`
    ${loop('sm', props)};
  `}

  ${theme.media.md`
    ${loop('md', props)};
  `}

  ${theme.media.lg`
    ${loop('lg', props)};
  `}

  ${theme.media.xl`
    ${loop('xl', props)};
  `}
`;
