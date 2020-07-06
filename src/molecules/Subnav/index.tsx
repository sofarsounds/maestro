import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom';

import styled, { css } from '../../lib/styledComponents';
import { buttonTextStyle } from '../../atoms/Button';

interface SubnavProps {
  children: any;
  'data-qaid'?: string;
  id?: string;
}

interface LinkProps extends RouterLinkProps {
  as?: string;
  active?: boolean;
}

interface Composition {
  Link: React.SFC<LinkProps>;
}

const Container = styled.div`
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  white-space: nowrap;
  text-align: center;

  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
`;
const Link = styled(RouterLink)<LinkProps>`
  ${buttonTextStyle};

  ${({ theme, active }) => css`
    display: inline-block;
    margin-right: ${theme.ruler[10]}px;
    padding-bottom: 24px;
    color: ${theme.colors.blueSmoke};
    position: relative;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: ${theme.colors.primary};
    }

    ${active &&
      css`
        color: ${theme.colors.backToBlack};

        &:before {
          content: '';
          position: absolute;
          width: 26px;
          height: 3px;
          bottom: 15px;
          left: calc(50% - 13px);
          border-bottom: 2px solid ${theme.colors.primary};
        }
      `}
  `}
`;

// @ts-ignore
const Subnav: React.SFC<SubnavProps> & Composition = ({
  children,
  'data-qaid': qaId,
  id
}) => (
  <Container id={id} data-qaid={qaId}>
    {children}
  </Container>
);

// @ts-ignore
Subnav.Link = Link;

export default Subnav;
