import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from '../../src';

storiesOf('Navbar', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <BrowserRouter>
      <div style={{ paddingTop: '100px' }}>
        <Navbar data-qaid="navbar" fixed>
          <Navbar.ItemContainer>
            <span style={{ color: '#fff' }}>LEFT</span>
          </Navbar.ItemContainer>
          <Navbar.ItemContainer align="right">
            <Navbar.Item href="#">London</Navbar.Item>
            <Navbar.Item href="#">Perform</Navbar.Item>
            <Navbar.Item href="#">Host</Navbar.Item>
            <Navbar.Item href="#">Your Events</Navbar.Item>
            <Navbar.Item>Your Account</Navbar.Item>
            <Navbar.Item>English</Navbar.Item>
          </Navbar.ItemContainer>
        </Navbar>
        <h1>Navbar Component</h1>
        <div style={{ height: '500px' }}>Scrollable Content</div>
      </div>
    </BrowserRouter>
  ))
  .add('With Dropdown', () => (
    <BrowserRouter>
      <div style={{ paddingTop: '100px' }}>
        <Navbar data-qaid="navbar" fixed>
          <Navbar.ItemContainer>
            <span style={{ color: '#fff' }}>LEFT</span>
          </Navbar.ItemContainer>
          <Navbar.ItemContainer align="right">
            <Navbar.Item href="#">London</Navbar.Item>
            <Navbar.Item href="#">Perform</Navbar.Item>
            <Navbar.Item href="#">Host</Navbar.Item>
            <Navbar.Item href="#">Your Events</Navbar.Item>
            <Navbar.DropdownItem title="Your Account">
              <Navbar.SubItem href="/dashboard">Dashboard</Navbar.SubItem>
              <Navbar.SubItem href="/profile/edit">Edit Profile</Navbar.SubItem>
              <Navbar.SubItem href="http://dev.sofarsounds.com/auth/signout">Sign Out</Navbar.SubItem>
            </Navbar.DropdownItem>
          </Navbar.ItemContainer>
        </Navbar>
        <h1>Navbar Component</h1>
        <div style={{ height: '500px' }}>Scrollable Content</div>
      </div>
    </BrowserRouter>
  ));
