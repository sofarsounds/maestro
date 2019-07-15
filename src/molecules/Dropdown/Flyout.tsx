import styled, { css } from '../../lib/styledComponents';

import { withShadow } from '../../util/index';

export default styled.div`
  ${withShadow({ depth: 4 })};

  ${({ theme }) => css`
    background-color: ${theme.colours.whiteDenim};
    width: 300px;
    max-height: 300px;
    margin-top: ${theme.ruler[1]}px;
    border-radius: ${theme.borderRadius.large};
    padding: ${theme.ruler[8]}px ${theme.ruler[6]}px;

    overflow-y: auto;
  `}
`;
