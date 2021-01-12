import React from 'react';
import styled, { css } from 'styled-components';

import { breakPoints } from '../../theme';
import Logo from '../../atoms/Logo';
import Container from '../../atoms/Container';

import NavbarContainer, { NavbarPositions } from './NavbarContainer';
import CollapsibleWrapper from './Collapsible';
import Hamburger from './CollapseIcon';
import Brand from './Brand';
import ItemContainer from './ItemContainer';
import Item from './Item';

interface NavbarProps {
  position?: NavbarPositions;
  invert?: boolean;
  transparent?: boolean;
  background?: string;
  containerMaxWidth?: number;
  containerBreakpoint?: number;
  children: any;
  logoLinkTo?: string;
  'data-qaid'?: string;
}

interface NavbarState {
  open: boolean;
  isMobile: boolean;
}

const hasWindow = typeof window !== 'undefined';

interface ContainerWidthProps {
  containerMaxWidth?: number;
  containerBreakpoint?: number;
}

const MainContainer = styled(Container)<ContainerWidthProps>`
  ${props => css`
    @media screen and (min-width: ${props.containerBreakpoint}px) {
      max-width: ${props.containerMaxWidth}px;
    }
  `}
`;

class Navbar extends React.Component<NavbarProps, NavbarState> {
  public static ItemContainer: any;
  public static Item: any;

  public readonly state: NavbarState = {
    open: false,
    isMobile: hasWindow ? window.innerWidth < breakPoints.md : true
  };

  componentDidMount = () => {
    if (hasWindow) {
      window.addEventListener('resize', this.resize);
    }
  };

  componentDidUpdate = (_: NavbarProps, prevState: NavbarState) => {
    if (prevState.isMobile && !this.state.isMobile) {
      this.onToggle(false);
    }
  };

  componentWillUnmount = () => {
    if (hasWindow) {
      window.removeEventListener('resize', this.resize);
    }
  };

  private resize = () => {
    const size = window.innerWidth;
    this.setState({ isMobile: size < breakPoints.md });
  };

  public onToggle = (isMobile?: boolean) => {
    if (!isMobile) {
      this.setState({ open: false });
      document.body.style.overflow = 'auto';
      return;
    }

    this.setState(prevState => ({ open: !prevState.open }));

    const { open } = this.state;
    if (!open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  public render() {
    const { open } = this.state;
    const {
      logoLinkTo,
      children,
      'data-qaid': qaId,
      transparent,
      position,
      background
    } = this.props;

    return (
      <NavbarContainer
        position={position}
        data-qaid={qaId}
        transparent={transparent}
        background={background}
      >
        <MainContainer alignItems="center" justifyContent="space-between">
          <a href={logoLinkTo || '/'}>
            <Brand>
              <Logo invert />
            </Brand>
          </a>
          <Hamburger onClick={this.onToggle} open={open} />
          <CollapsibleWrapper open={open}>{children}</CollapsibleWrapper>
        </MainContainer>
      </NavbarContainer>
    );
  }
}

Navbar.ItemContainer = ItemContainer;
Navbar.Item = Item;

export default Navbar;
