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
  fixed?: Boolean;
  invert?: boolean;
  children: any;
}

interface NavbarState {
  open: boolean;
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  public static ItemContainer: any;
  public static Item: any;

  public readonly state: NavbarState = {
    open: false
  };

  public onToggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });

    if (!open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  public render() {
    const { open } = this.state;
    const { children, fixed } = this.props;

    return (
      <NavbarContainer fixed={fixed}>
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
