/* import React from 'react'; */
import styled, { css } from '../../lib/styledComponents';
import { withShadow } from '../../util';

interface Props {
  children?: any;
  depth: any;
  width?: number;
}

const Menu = styled.ul<Props>`
  ${({ theme, width }) => css`
    ${withShadow}
    margin-top: 0px;
    width: ${width}px;
    padding-left: 0px;
    background-color: ${theme.colours.whiteDenim};
    max-height: 300px;
    overflow-y: auto;
  `};
`;

export default Menu;
