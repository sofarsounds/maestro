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
  color: ${({ theme }) => theme.colors.blueSmoke};
`;

export interface LogoWithSloganProps {
  href?: any;
  logoWidthPx?: string;
}

const LogoWithSlogan: React.FC<LogoWithSloganProps> = ({
  href,
  logoWidthPx
}) => {
  const logoWidth = logoWidthPx ? logoWidthPx : '104px';

  return (
    <Col xs={12} xl={5}>
      <LogoSloganContainer>
        {href ? (
          <a href={href}>
            <Logo width={logoWidth} invert />
          </a>
        ) : (
          <Logo width={logoWidth} invert />
        )}
        <Slogan>Intimate gigs all around the world</Slogan>
      </LogoSloganContainer>
    </Col>
  );
};

export default LogoWithSlogan;
