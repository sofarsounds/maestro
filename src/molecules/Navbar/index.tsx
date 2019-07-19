import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../atoms/Logo';
import Container from '../../atoms/Container';

import NavbarContainer from './NavbarContainer';
import CollapsibleWrapper from './Collapsible';
import Hamburger from './CollapseIcon';
import Brand from './Brand';
import ItemContainer from './ItemContainer';
import Item from './Item';
import DropdownItem, { SubItem } from './DropdownItem';


interface NavbarProps {
  fixed?: boolean;
  invert?: boolean;
  children: any;
  logoLinkTo?: string;
  'data-qaid'?: string;
}

interface NavbarState {
  open: boolean;
}

class Navbar extends React.Component<NavbarProps, NavbarState> {
  public static ItemContainer: any;
  public static Item: any;
  public static DropdownItem: any;
  public static SubItem: any;

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
    const { logoLinkTo, children, fixed, 'data-qaid': qaId } = this.props;

    return (
      <NavbarContainer fixed={fixed} data-qaid={qaId}>
        <Container alignItems="center" justifyContent="space-between">
          <Link to={logoLinkTo || '/'}>
            <Brand>
              <Logo invert />
            </Brand>
          </Link>
          <Hamburger onClick={this.onToggle} open={open} />
          <CollapsibleWrapper open={open}>{children}</CollapsibleWrapper>
        </Container>
      </NavbarContainer>
    );
  }
}

Navbar.ItemContainer = ItemContainer;
Navbar.Item = Item;
Navbar.DropdownItem = DropdownItem;
Navbar.SubItem = SubItem;

export default Navbar;
