import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';

import { BrowserRouter } from 'react-router-dom';
import {
  Dropdown,
  Select,
  Responsive,
  Icon,
  MenuItem,
  Navbar,
  Menu
} from '../../src';
import { cities, MultiDimensional, multiDimensional } from '../helpers/cities';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .addDecorator(withDesign)
  .addParameters({
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/P31na2HYB09sF7v5B0nqkJ/Sofar-Design-System?node-id=13%3A389',
    },
  })
  .add('Default', () => (
    <BrowserRouter>
      <div>
        <Navbar data-qaid="navbar">
          <Navbar.ItemContainer>
            <Select<MultiDimensional>
              invertColor
              initialWidth="175px"
              options={multiDimensional}
              getOptionLabel={o => o.title}
              placeholder="Select City"
              onChange={o => console.log(o)}
            />
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
                  <MenuItem key={index} onClick={action(city)}>
                    {city}
                  </MenuItem>
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
