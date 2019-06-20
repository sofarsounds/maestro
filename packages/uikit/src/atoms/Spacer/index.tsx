import styled, { css } from 'styled-components';

import theme from '../../theme';

interface SpacerProps {
  // global margin & padding
  m?: string | number;
  p?: string | number;

  // margins
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  mx?: string | number;
  my?: string | number;

  // padding
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  px?: string | number;
  py?: string | number;
}

const generateSpace = (unit: string | number): string => {
  if (unit === 'auto') {
    return 'auto';
  }

  return `${theme.ruler[Number(unit)]}px`;
};

export default styled.div<SpacerProps>`
  ${({ theme: { ruler }, ...d }) => css`
    ${d.m &&
      css`
        margin: ${generateSpace(d.m)};
      `};
    ${d.p &&
      css`
        padding: ${generateSpace(d.p)};
      `};

    // margins
    ${d.mt &&
      css`
        margin-top: ${generateSpace(d.mt)};
      `};
    ${d.mr &&
      css`
        margin-right: ${generateSpace(d.mr)};
      `};
    ${d.mb &&
      css`
        margin-bottom: ${generateSpace(d.mb)};
      `};
    ${d.ml &&
      css`
        margin-left: ${generateSpace(d.ml)};
      `};
    ${d.mx &&
      css`
        margin-left: ${generateSpace(d.mx)};
        margin-right: ${generateSpace(d.mx)};
      `};
    ${d.my &&
      css`
        margin-top: ${generateSpace(d.my)};
        margin-bottom: ${generateSpace(d.my)};
      `};

    // paddings
    ${d.pt &&
      css`
        padding-top: ${generateSpace(d.pt)};
      `};
    ${d.pr &&
      css`
        padding-right: ${generateSpace(d.pr)};
      `};
    ${d.pb &&
      css`
        padding-bottom: ${generateSpace(d.pb)};
      `};
    ${d.pl &&
      css`
        padding-left: ${generateSpace(d.pl)};
      `};
    ${d.px &&
      css`
        padding-left: ${generateSpace(d.px)};
        padding-right: ${generateSpace(d.px)};
      `};
    ${d.py &&
      css`
        padding-top: ${generateSpace(d.py)};
        padding-bottom: ${generateSpace(d.py)};
      `};
  `}
`;
