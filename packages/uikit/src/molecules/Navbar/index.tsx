import React from 'react';

import Logo from '../../atoms/Logo';

import NavbarContainer from './NavbarContainer';
import Container from './Container';
import CollapsibleWrapper from './Collapsible';
import Hamburger from './CollapseIcon';
import Brand from './Brand';
import ItemContainer from './ItemContainer';
import Item from './Item';

interface NavbarProps {
  fixed?: boolean;
  invert?: boolean;
  children: any;
}

interface NavbarState {
  open: boolean;
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  static ItemContainer: any;
  static Item: any;

  public readonly state: NavbarState = {
    open: false
  };

  onToggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });

    if (!open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  render() {
    const { open } = this.state;
    const { children } = this.props;

    return (
      <NavbarContainer>
        <Container>
          <Brand>
            <Logo invert />
          </Brand>
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
