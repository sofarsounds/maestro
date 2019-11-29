import React from 'react';

import { Top, Title, Subtitle, CityInputWrapper } from './Top';
import { SectionHeader, SectionLink, LinkSection } from './Section';
import LogoWithSlogan, { LogoWithSloganProps } from './LogoWithSlogan';

import {
  default as Bottom,
  SocialIcons,
  CopyrightMsg,
  IconStyled
} from './Bottom';

interface FooterProps {
  children: any;
  'data-qaid'?: string;
}

interface Composition {
  Top: React.SFC;
  Title: React.SFC;
  Subtitle: React.SFC;
  CityInputWrapper: React.SFC;
  LogoWithSlogan: React.SFC<LogoWithSloganProps>;
  LinkSection: React.SFC;
  SectionHeader: React.SFC;
  SectionLink: React.SFC<any>;
  SocialIcons: React.SFC;
  Icon: React.SFC<{ name: string }>;
  CopyrightMsg: React.SFC;
  Bottom: React.SFC;
}

const Footer: React.SFC<FooterProps> & Composition = ({
  children,
  'data-qaid': qaId
}) => <div data-qaid={qaId}>{children}</div>;

Footer.Top = Top;
Footer.Title = Title;
Footer.Subtitle = Subtitle;
Footer.CityInputWrapper = CityInputWrapper;
Footer.LogoWithSlogan = LogoWithSlogan;
Footer.LinkSection = LinkSection;
Footer.SectionHeader = SectionHeader;
Footer.SectionLink = SectionLink;
Footer.SocialIcons = SocialIcons;
Footer.Icon = IconStyled;
Footer.CopyrightMsg = CopyrightMsg;
Footer.Bottom = Bottom;

export default Footer;
