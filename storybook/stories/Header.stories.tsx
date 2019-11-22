import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import { BrowserRouter } from 'react-router-dom';
import {
  Dropdown,
  Select,
  Responsive,
  Icon,
  Option,
  Navbar,
  Menu,
  OutlineButton
} from '../../src';
import cities from '../helpers/cities';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <BrowserRouter>
      <div>
        <Navbar data-qaid="navbar">
          <Navbar.ItemContainer>
            <Dropdown
              flyoutContainer={false}
              offset={{ vertical: -2 }}
              renderLabel={isOpen => (
                <OutlineButton small color={'white'}>
                  <span style={{ marginRight: '5px', color: 'inherit' }}>
                    Cities
                  </span>
                  <Icon
                    color={'whiteDenim'}
                    name={isOpen ? 'caretUp' : 'caretDown'}
                    size={'8px'}
                  />
                </OutlineButton>
              )}
            >
              <Menu depth={2} isSelect width={150}>
                {cities.map((city, index) => (
                  <Option
                    key={index}
                    value={city}
                    onClick={action('I was clicked')}
                  >
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
              offset={{ vertical: 10 }}
              renderLabel={isOpen => (
                <Navbar.Item>
                  <span style={{ marginRight: '5px', color: 'inherit' }}>
                    My Account
                  </span>
                  <Icon
                    color={'whiteDenim'}
                    name={isOpen ? 'caretUp' : 'caretDown'}
                    size={'8px'}
                  />
                </Navbar.Item>
              )}
            >
              <Menu depth={2}>
                {cities.slice(0, 4).map((city, index) => (
                  <Option key={index} value={city} onClick={action(city)}>
                    {city}
                  </Option>
                ))}
              </Menu>
            </Dropdown>
            <Responsive hideUp={'sm'}>
              <Navbar.Item>How it works</Navbar.Item>
            </Responsive>
          </Navbar.ItemContainer>
        </Navbar>
        <h1>Navbar Component</h1>
        <div style={{ height: '500px' }}>Scrollable Content</div>
      </div>
    </BrowserRouter>
  ));
