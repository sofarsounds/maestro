import styled, { css } from '../../lib/styledComponents';

import { withShadow } from '../../util/index';

export type FlyoutSizes = 'small' | 'large';

interface FlyoutProps {
  size?: FlyoutSizes;
}

export default styled.div<FlyoutProps>`
  ${withShadow({ depth: 4 })};

  ${({ theme, size = 'regular' }) => css`
    background-color: ${theme.colours.whiteDenim};
    max-height: 300px;
    margin-top: ${theme.ruler[1]}px;
    border-radius: ${theme.borderRadius.large};
    padding: ${theme.ruler[8]}px ${theme.ruler[6]}px;

    overflow-y: auto;

    width: 200px;

    ${size === 'small' &&
      css`
        width: 150px;
      `}

    ${size === 'large' &&
      css`
        width: 250px;
      `}
  `}
`;
