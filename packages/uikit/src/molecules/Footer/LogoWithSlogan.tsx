import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { Col } from '../../atoms/Grid';
import Logo from '../../atoms/Logo';

const LogoSloganContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: ${theme.ruler[12]}px;

    ${theme.media.xl`
      margin-bottom: 0;
    `}
  `}
`;

const Slogan = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colours.blueSmoke};
`;

export default () => (
  <Col xs={12} xl={5}>
    <LogoSloganContainer>
      <Logo width="133px" invert />
      <Slogan>Intimate gigs all around the world</Slogan>
    </LogoSloganContainer>
  </Col>
);
