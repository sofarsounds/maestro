import styled, { css } from '../../lib/styledComponents';
import { Overline } from '../Typography';

export default styled(Overline)<any>`
  ${({ theme, invertColor }) => css`
    padding: ${theme.ruler[1]}px ${theme.ruler[4]}px;
    background: ${invertColor ? 'transparent' : theme.colors.whiteDenim};
    position: sticky;
    display: block;
    top: 0;

    color: ${theme.colors.primary};
  `}
`;
