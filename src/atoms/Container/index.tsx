import styled, { css } from 'styled-components';

import { withFlex, WithFlexProps } from '../../util';

// TODO do we need different sizes per container?
// i.e. "small" or "large" container in addition to the default
// max-width?
interface ContainerProps extends WithFlexProps {
  size?: string;
}

export default styled.div<ContainerProps>`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.ruler[4]}px;

    ${theme.media.sm`
      max-width: 540px;
      padding: 0 10px;
    `}

    ${theme.media.md`
      max-width: 740px;
    `}

    ${theme.media.lg`
      max-width:960px;
    `}

    ${theme.media.xl`
      max-width: 1160px;
    `}
  `}

  ${withFlex};
`;
