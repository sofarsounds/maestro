import styled, { css } from '../../lib/styledComponents';
import { Overline } from '../Typography';

export default styled(Overline)`
  ${({ theme }) => css`
    padding: ${theme.ruler[1]}px ${theme.ruler[4]}px;
    background: ${theme.colors.whiteDenim};
    position: sticky;
    display: block;
    top: 0;

    color: ${theme.colors.primary};
  `}
`;
