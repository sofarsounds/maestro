import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';

import { Navbar, HeroImage } from '../../src';

storiesOf('Navbar', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <BrowserRouter>
      <div style={{ paddingTop: '100px' }}>
        <Navbar data-qaid="navbar" position="fixed">
          <Navbar.ItemContainer>
            <span style={{ color: '#fff' }}>LEFT</span>
          </Navbar.ItemContainer>
          <Navbar.ItemContainer align="right">
            <Navbar.Item href="#">London</Navbar.Item>
            <Navbar.Item href="#">Perform</Navbar.Item>
            <Navbar.Item>Host</Navbar.Item>
            <Navbar.Item>Your Events</Navbar.Item>
            <Navbar.Item emphasize>Your Account</Navbar.Item>
            <Navbar.Item>English</Navbar.Item>
          </Navbar.ItemContainer>
        </Navbar>
        <h1>Navbar Component</h1>
        <div style={{ height: '500px' }}>Scrollable Content</div>
      </div>
    </BrowserRouter>
  ))
  .add('Transparent', () => (
    <BrowserRouter>
      <>
        <Navbar data-qaid="navbar" position="fixed" transparent>
          <Navbar.ItemContainer>
            <span style={{ color: '#fff' }}>LEFT</span>
          </Navbar.ItemContainer>
          <Navbar.ItemContainer align="right">
            <Navbar.Item href="#">London</Navbar.Item>
            <Navbar.Item href="#">Perform</Navbar.Item>
            <Navbar.Item>Host</Navbar.Item>
            <Navbar.Item>Your Events</Navbar.Item>
            <Navbar.Item emphasize>Your Account</Navbar.Item>
            <Navbar.Item>English</Navbar.Item>
          </Navbar.ItemContainer>
        </Navbar>
        <HeroImage
          height="600px"
          imageURL="https://www.stratatiles.co.uk/wp-content/uploads/2015/04/102.jpg"
          title="This is a title"
        />
      </>
    </BrowserRouter>
  ));
