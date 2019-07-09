import { Link as RouterLink } from 'react-router-dom';

import styled, { css } from '../../lib/styledComponents';
import { buttonTextStyle } from '../../atoms/Button';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    & {
      flex-direction: column;
    }
  }
`;

interface LinkProps {
  active?: boolean;
}
const Link = styled(RouterLink)<LinkProps>`
  ${buttonTextStyle};

  ${({ theme, active }) => css`
    display: inline;
    padding-bottom: 24px;
    color: ${theme.colours.blueSmoke};
    position: relative;
    text-align:center;

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
