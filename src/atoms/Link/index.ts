import { Link as RouterLink } from 'react-router-dom';

import styled, { css } from '../../lib/styledComponents';
import theme from '../../theme';

export const withLinkStyle = () => css`
  color: ${theme.colors.primary};
  font-weight: bold;

  &:link,
  &:visited {
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
    color: ${theme.colors.primary};
  }
`;

export const Link = styled(RouterLink)`
  ${withLinkStyle};
`;
