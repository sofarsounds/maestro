import { css } from 'styled-components';

import theme, { breakPoints } from '../theme';

interface SpacerProps {
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
export const generateSpace = (size: string, where: string, units: any) => {
  // if it's an array that means it's responsive
  // [xs, sm, md, lg, xl]
  // if only 2 are given
  // [xs, sm] means md, lg, xl will be the same as sm

  if (Array.isArray(units)) {
    let styles: any = [];
    const sizeIndex = breakPointKeys.indexOf(size);

    if (sizeIndex > -1) {
      if (units[sizeIndex]) {
        styles.push(
          generateCssProperty(
            where,
            `${theme.ruler[Number(units[sizeIndex])]}px`
          )
        );
      }
    }

    return styles;
  }

  return generateCssProperty(where, `${theme.ruler[Number(units)]}px`);
};

const loop = (size: string, props: any) => {
  let s = '';

  Object.keys(props).forEach(x => {
    if (/^(m|p)(t|b|r|l)?$/.test(x)) {
      s += `
        ${generateSpace(size, x, props[x])}
      `;
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
