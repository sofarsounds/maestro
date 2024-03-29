import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { Title as TitleDefault, H5 } from '../../atoms/Typography';
import Container from '../../atoms/Container';

const Main = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.blackBetty};
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
  color: ${({ theme }) => theme.colors.whiteDenim};
  text-align: center;
`;

export const Subtitle = styled(H5)`
  ${({ theme }) => css`
    margin-bottom: ${theme.ruler[9]}px;
    color: ${theme.colors.whiteDenim};
    text-align: center;

    b {
      color: ${theme.colors.whiteDenim};
    }
  `}
`;

export const CityInputWrapper = styled.div`
  width: 100%;
  max-width: 555px;
  margin-bottom: ${({ theme }) => theme.ruler[2]}px;
`;

export const CityContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.ruler[16]}px;
  display: inline-grid;
  text-align: center;

  ${({ theme }) => theme.media.md`
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 555px;
    `}
`;

export const CityLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.blueSmoke};
    font-size: ${theme.fontSizes.body2};
    padding: ${theme.ruler[1]}px 0;

    &:hover {
      text-decoration: underline;
    }
  `}
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
