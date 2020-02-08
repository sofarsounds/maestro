import React from 'react';
import styled, { css } from '../../lib/styledComponents';
import { Overline } from '../Typography';

interface Props {
  children: string | React.ReactNode;
  'data-qaid'?: string;
}

export default styled(Overline)`
  ${({ theme }) => css`
    padding: ${theme.ruler[1]}px ${theme.ruler[4]}px;

    color: ${theme.colors.primary};
  `}
`;