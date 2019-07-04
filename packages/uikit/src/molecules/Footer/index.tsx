import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import { Title, Subtitle, H6 } from '../../atoms/Typography';
import ContainerDefault from '../../atoms/Container';
import Logo from '../../atoms/Logo';
import Icon from '../../atoms/Icon';
import theme from '../../theme';

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

const RowContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const TitleStyled = styled(Title)`
  margin-bottom: ${({ theme }) => theme.ruler[3]}px;
`;

const SubtitleStyled = styled(Subtitle)`
  margin-bottom: ${({ theme }) => theme.ruler[9]}px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Slogan = styled.div`
  //
`;

const LogoWithSlogan = () => (
  <LogoSloganContainer>
    <Logo width="133px" invert />
    <Slogan>Intimate gigs all around the world</Slogan>
  </LogoSloganContainer>
);

const IconStyled = (p: any) => (
  <Icon {...p} size="40px" colour={theme.colours.blueSmoke} />
);

const CopyrightContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colours.backToBlack};
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    * {
      color: ${theme.colours.whiteDenim};
    }
  `}
`;

const SocialIcons = styled.div`
  i {
    margin-right: ${({ theme }) => theme.ruler[2]}px;
  }
`;

const CopyrightMsg = styled.div`
  text-align: right;
`;

const Top: React.SFC<any> = ({ children }) => (
  <Main>
    <Container>
      {children}
    </Container>
  </Main>
)

const Bottom: React.SFC<any> = ({ children }) => (
  <CopyrightContainer>
    <RowContainer>{children}</RowContainer>
  </CopyrightContainer>
);

export default {
  Top,
  Title: TitleStyled,
  Subtitle: SubtitleStyled,
  CityInputWrapper,
  LogoWithSlogan,
  SectionHeader,
  SectionLink,
  SocialIcons,
  Icon: IconStyled,
  CopyrightMsg,
  Bottom
};
