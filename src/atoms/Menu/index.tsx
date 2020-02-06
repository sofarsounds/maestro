import styled, { css } from '../../lib/styledComponents';
import { withShadow } from '../../util';
import { ShadowDepth } from '../../util/withShadow';

interface Props {
  children?: any;
  width?: string;
  bordered?: boolean;
  depth?: any;
}

const Menu = styled.ul<Props>`
  ${({ depth = 3, theme, width, bordered }) => css`
    ${withShadow({ depth })};

    margin: 0;
    padding: 0;
    border-radius: ${theme.borderRadius.default};
    background-color: ${theme.colors.whiteDenim};
    max-height: 300px;
    width: ${width || 'auto'};
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    ${bordered &&
      css`
        border: 1px solid ${theme.colors.macyGrey};
      `}
  `};
`;

export default Menu;
