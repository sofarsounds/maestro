import styled from 'styled-components';

import { Top, Title, Subtitle, CityInputWrapper } from './Top';
import { SectionHeader, SectionLink, LinkSection } from './Section';
import LogoWithSlogan from './LogoWithSlogan';

import {
  default as Bottom,
  SocialIcons,
  CopyrightMsg,
  IconStyled
} from './Bottom';

export default {
  Wrapper: styled.div``,
  Top,
  Title,
  Subtitle,
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
