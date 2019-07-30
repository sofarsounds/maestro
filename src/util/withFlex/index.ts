import { css } from '../../lib/styledComponents';

export interface WithFlexProps {
  flexDirection?: string;
  flexWrap?: string;
  flexFlow?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
}

export default ({
  flexDirection,
  flexWrap,
  flexFlow,
  justifyContent,
  alignItems,
  alignContent
}: WithFlexProps) => css`
  ${(flexDirection ||
    flexWrap ||
    flexFlow ||
    justifyContent ||
    alignItems ||
    alignContent) &&
    css`
      display: flex;

      ${flexDirection && `flex-direction: ${flexDirection};`}
      ${flexWrap && `flex-wrap: ${flexWrap};`}
      ${flexFlow && `flex-flow: ${flexFlow};`}
      ${justifyContent && `justify-content: ${justifyContent};`}
      ${alignItems && `align-items: ${alignItems};`}
      ${alignContent && `align-content: ${alignContent};`}
    `}
`;
