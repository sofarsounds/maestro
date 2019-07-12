import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { Title as TitleDefault, H5 } from '../../atoms/Typography';
import Container from '../../atoms/Container';

const Main = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colours.blackBetty};
    background-image: url(${require('./world-map-1.png')});
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    padding: ${theme.ruler[15]}px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`;

export const Title = styled(TitleDefault)`
  margin-bottom: ${({ theme }) => theme.ruler[3]}px;
  color: ${({ theme }) => theme.colours.whiteDenim};
  text-align: center;
`;

export const Subtitle = styled(H5)`
  ${({ theme }) => css`
    margin-bottom: ${theme.ruler[9]}px;
    color: ${theme.colours.whiteDenim};
    text-align: center;

    b {
      color: ${theme.colours.whiteDenim};
    }
  `}
`;

export const CityInputWrapper = styled.div`
  width: 100%;
  max-width: 555px;
  margin-bottom: ${({ theme }) => theme.ruler[16]}px;
`;

export const Top: React.SFC<any> = ({ children }) => (
  <Main>
    <Container
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {children}
    </Container>
  </Main>
);
