import { css } from 'styled-components';

import theme from '../theme';

export const getSpaceFromRuler = (unit: string | number | number[]): string => {
  if (unit === 'auto') {
    return 'auto';
  }

  return `${theme.ruler[Number(unit)]}px`;
};

interface SpacerProps {
  // global margin & padding
  m?: string | number | number[];
  p?: string | number | number[];

  // margins
  mt?: string | number | number[];
  mr?: string | number | number[];
  mb?: string | number | number[];
  ml?: string | number | number[];
  mx?: string | number | number[];
  my?: string | number | number[];

  // padding
  pt?: string | number | number[];
  pr?: string | number | number[];
  pb?: string | number | number[];
  pl?: string | number | number[];
  px?: string | number | number[];
  py?: string | number | number[];
}

export default (props: SpacerProps) => css`
  ${props.m &&
    css`
      margin: ${getSpaceFromRuler(props.m)};
    `};
  ${props.p &&
    css`
      padding: ${getSpaceFromRuler(props.p)};
    `};

  // margins
  ${props.mt &&
    css`
      margin-top: ${getSpaceFromRuler(props.mt)};
    `};
  ${props.mr &&
    css`
      margin-right: ${getSpaceFromRuler(props.mr)};
    `};
  ${props.mb &&
    css`
      margin-bottom: ${getSpaceFromRuler(props.mb)};
    `};
  ${props.ml &&
    css`
      margin-left: ${getSpaceFromRuler(props.ml)};
    `};
  ${props.mx &&
    css`
      margin-left: ${getSpaceFromRuler(props.mx)};
      margin-right: ${getSpaceFromRuler(props.mx)};
    `};
  ${props.my &&
    css`
      margin-top: ${getSpaceFromRuler(props.my)};
      margin-bottom: ${getSpaceFromRuler(props.my)};
    `};

  // paddings
  ${props.pt &&
    css`
      padding-top: ${getSpaceFromRuler(props.pt)};
    `};
  ${props.pr &&
    css`
      padding-right: ${getSpaceFromRuler(props.pr)};
    `};
  ${props.pb &&
    css`
      padding-bottom: ${getSpaceFromRuler(props.pb)};
    `};
  ${props.pl &&
    css`
      padding-left: ${getSpaceFromRuler(props.pl)};
    `};
  ${props.px &&
    css`
      padding-left: ${getSpaceFromRuler(props.px)};
      padding-right: ${getSpaceFromRuler(props.px)};
    `};
  ${props.py &&
    css`
      padding-top: ${getSpaceFromRuler(props.py)};
      padding-bottom: ${getSpaceFromRuler(props.py)};
    `};
`;
