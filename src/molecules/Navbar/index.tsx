import React from 'react';

import { breakPoints } from '../../theme';
import Logo from '../../atoms/Logo';
import Container from '../../atoms/Container';

import NavbarContainer from './NavbarContainer';
import CollapsibleWrapper from './Collapsible';
import Hamburger from './CollapseIcon';
import Brand from './Brand';
import ItemContainer from './ItemContainer';
import Item from './Item';

interface NavbarProps {
  fixed?: boolean;
  invert?: boolean;
  transparent?: boolean;
  absolutePosition?: boolean;
  children: any;
  logoLinkTo?: string;
  'data-qaid'?: string;
}

interface NavbarState {
  open: boolean;
  isMobile: boolean;
}

const hasWindow = typeof window !== 'undefined';

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
      fixed,
      'data-qaid': qaId,
      transparent,
      absolutePosition
    } = this.props;

    return (
      <NavbarContainer
        fixed={fixed}
        data-qaid={qaId}
        transparent={transparent}
        absolutePosition={absolutePosition}
      >
        <Container alignItems="center" justifyContent="space-between">
          <a href={logoLinkTo || '/'}>
            <Brand>
              <Logo invert />
            </Brand>
          </a>
          <Hamburger onClick={this.onToggle} open={open} />
          <CollapsibleWrapper open={open}>{children}</CollapsibleWrapper>
        </Container>
      </NavbarContainer>
    );
  }
}

Navbar.ItemContainer = ItemContainer;
Navbar.Item = Item;

export default Navbar;
