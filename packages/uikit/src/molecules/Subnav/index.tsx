import { Link as RouterLink } from 'react-router-dom';

import styled, { css } from '../../lib/styledComponents';
import { buttonTextStyle } from '../../atoms/Button';

const Container = styled.div`
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
  white-space: nowrap;
  text-align: center;

  &::-webkit-scrollbar { /* WebKit */
      width: 0;
      height: 0;
  }
`;

interface LinkProps {
  active?: boolean;
}
const Link = styled(RouterLink)<LinkProps>`
  ${buttonTextStyle};

  ${({ theme, active }) => css`
    display: inline-block;
    margin-right: ${theme.ruler[10]}px;
    padding-bottom: 24px;
    color: ${theme.colours.blueSmoke};
    position: relative;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: ${theme.colours.primary};
    }

    ${active &&
      css`
        color: ${theme.colours.backToBlack};

        &:before {
          content: '';
          position: absolute;
          width: 26px;
          height: 3px;
          bottom: 15px;
          left: calc(50% - 13px);
          border-bottom: 2px solid ${theme.colours.primary};
        }
      `}
  `}
`;

export default {
  Container,
  Link
};
