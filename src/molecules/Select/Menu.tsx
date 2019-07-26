/* import React from 'react'; */
import styled, { css } from '../../lib/styledComponents';
import { withShadow } from '../../util';

interface Props {
  children?: any;
  depth: any;
  width?: number;
  isSelect?: boolean;
}

const Menu = styled.ul<Props>`
  ${({ theme, width, isSelect = false }) => css`
    ${withShadow}
    margin-top: 0px;
    border-bottom-left-radius: ${theme.borderRadius.large};
    border-bottom-right-radius: ${theme.borderRadius.large};
    width: ${width}px;
    padding-left: 0px;
    background-color: ${theme.colors.whiteDenim};
    max-height: 300px;
    overflow-y: auto;

    ${!width &&
      css`
        width: auto;
      `}

    ${width &&
      css`
        width: ${width}px;
      `}

    ${!isSelect &&
      css`
        border-top-left-radius: ${theme.borderRadius.large};
        border-top-right-radius: ${theme.borderRadius.large};
      `}
  `};
`;

export default Menu;
