import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { BrowserRouter } from 'react-router-dom';
import {
  Dropdown,
  Select,
  Icon,
  Option,
  Navbar,
  Menu,
  OutlineButton
} from '../../src';
import cities from '../helpers/cities';

const catClick = () => {
  console.log('dog');
};

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <BrowserRouter>
      <div style={{ paddingTop: '100px' }}>
        <Navbar data-qaid="navbar" fixed>
          <Navbar.ItemContainer>
            <Dropdown
              flyoutContainer={false}
              renderLabel={isOpen => (
                <OutlineButton small colour={'white'}>
                  <span style={{ marginRight: '5px', color: 'inherit' }}>
                    Cities
                  </span>
                  <Icon
                    colour={'#ffffff'}
                    name={isOpen ? 'caretUp' : 'caretDown'}
                    size={'8px'}
                  />
                </OutlineButton>
              )}
            >
              <Menu depth={2} width={300}>
                {cities.map((city, index) => (
                  <Option key={index} value={city} onClick={catClick}>
                    {city}
                  </Option>
                ))}
              </Menu>
            </Dropdown>
          </Navbar.ItemContainer>
          <Navbar.ItemContainer align="right">
            <Navbar.Item href="#">London</Navbar.Item>
            <Navbar.Item href="#">Perform</Navbar.Item>
            <Navbar.Item>Host</Navbar.Item>
            <Dropdown
              flyoutContainer={false}
              renderLabel={isOpen => (
                <Navbar.Item>
                  <span style={{ marginRight: '5px', color: 'inherit' }}>
                    My Account
                  </span>
                  <Icon
                    colour={'#ffffff'}
                    name={isOpen ? 'caretUp' : 'caretDown'}
                    size={'8px'}
                  />
                </Navbar.Item>
              )}
            >
              <Menu width={200} depth={2}>
                {cities.slice(0, 4).map((city, index) => (
                  <Option key={index} value={city} onClick={catClick}>
                    {city}
                  </Option>
                ))}
              </Menu>
            </Dropdown>
            <Navbar.Item>English</Navbar.Item>
          </Navbar.ItemContainer>
        </Navbar>
        <h1>Navbar Component</h1>
        <div style={{ height: '500px' }}>Scrollable Content</div>
      </div>
    </BrowserRouter>
  ));
