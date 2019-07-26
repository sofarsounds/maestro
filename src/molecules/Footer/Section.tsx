import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { H6 } from '../../atoms/Typography';
import { Col } from '../../atoms/Grid';

const LinkSectionCol = styled(Col)`
  ${({ theme }) => css`
    text-align: center;

    ${theme.media.xl`
      text-align: left;
    `}
  `}
`;

export const SectionHeader = styled(H6)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const SectionLink = styled.a`
  display: block;
  text-decoration: none;
  padding: 4px 0;
  color: ${({ theme }) => theme.colors.whiteDenim};

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkSection: React.SFC<any> = ({ children }) => (
  <LinkSectionCol xs={12} lg={4} xl={2}>
    {children}
  </LinkSectionCol>
);
