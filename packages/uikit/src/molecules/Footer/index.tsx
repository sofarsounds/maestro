import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { Title, Subtitle, H6 } from '../../atoms/Typography';
import ContainerDefault from '../../atoms/Container';
import { Col } from '../../atoms/Grid';
import Logo from '../../atoms/Logo';

import {
  default as Bottom,
  SocialIcons,
  CopyrightMsg,
  IconStyled
} from './Bottom';

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

    * {
      color: ${theme.colours.whiteDenim};
    }
  `}
`;

const Container = styled(ContainerDefault)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleStyled = styled(Title)`
  margin-bottom: ${({ theme }) => theme.ruler[3]}px;
  text-align: center;
`;

const SubtitleStyled = styled(Subtitle)`
  margin-bottom: ${({ theme }) => theme.ruler[9]}px;
  text-align: center;
`;

const CityInputWrapper = styled.div`
  width: 100%;
  max-width: 555px;
  margin-bottom: ${({ theme }) => theme.ruler[16]}px;
`;

const SectionHeader = styled(H6)`
  color: ${({ theme }) => theme.colours.primary};
`;

const SectionLink = styled.a`
  display: block;
  text-decoration: none;
  padding: 4px 0;
`;

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
`;

const LogoWithSlogan = () => (
  <Col xs={12} xl={5}>
    <LogoSloganContainer>
      <Logo width="133px" invert />
      <Slogan>Intimate gigs all around the world</Slogan>
    </LogoSloganContainer>
  </Col>
);

const Top: React.SFC<any> = ({ children }) => (
  <Main>
    <Container>{children}</Container>
  </Main>
);

const LinkSectionCol = styled(Col)`
  ${({ theme }) => css`
    text-align: center;

    ${theme.media.xl`
      text-align: left;
    `}
  `}
`;

const LinkSection: React.SFC<any> = ({ children }) => (
  <LinkSectionCol xs={12} lg={4} xl={2}>
    {children}
  </LinkSectionCol>
);

export default {
  Top,
  Title: TitleStyled,
  Subtitle: SubtitleStyled,
  CityInputWrapper,
  LogoWithSlogan,
  SectionHeader,
  SectionLink,
  LinkSection,
  SocialIcons,
  Icon: IconStyled,
  CopyrightMsg,
  Bottom
};
