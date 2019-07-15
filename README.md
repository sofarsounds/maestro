# 🎻 Maestro

[![CircleCI](https://circleci.com/gh/sofarsounds/maestro/tree/master.svg?style=svg)](https://circleci.com/gh/sofarsounds/maestro/tree/master)
[![CircleCI](https://circleci.com/gh/sofarsounds/maestro/tree/develop.svg?style=svg)](https://circleci.com/gh/sofarsounds/maestro/tree/develop)

[Sofar Sounds](http://www.sofarsounds.com)' Maestro is a React component library which is built after our official design system
and helps our developers build a consistent user experience.

## Sofar Mission

[Sofar Sounds](http://www.sofarsounds.com) is reimagining the live event experience through curated, intimate performances in 438 cities around the world.

## Installation

`@sofarsounds/maestro` is serverd as an npm package.

Add Maestro to your project by running
```
// with npm
npm add @sofarsounds/maestro

// with yarn
yarn add @sofarsounds/maestro
```

Don't forget to also install [styled-components](https://www.styled-components.com) `^4.0.0`.

## Usage

### 1. Wrap your app into the ThemeProvider and provide GlobalStyles

Since we're using styled-components and are providing all styling via theme it is necessary
that you wrap your entire application within the `ThemeProvider`. In addition to that, you can
provide the GlobalStyle we have created which automatically provides our brand font (Open Sans) and does some basic HTML styling.

```js
import { ThemeProvider, GlobalStyle, theme } from '@sofarsounds/maestro'

<ThemeProvider theme={theme}>
  <GlobalStyle />
  <YourApplication />
</ThemeProvider>
```

### 2. Including components

All of our components are exported directly so you can simply import any component like this:

```js
import { H1, Body, PrimaryButton} from '@sofarsounds/maestro'

<H1>A Heading 1</H1>
<Body>A body text...</Body>

<PrimaryButton>A Button</PrimaryButton>
```

For a live preview please check out our [Storybook](https://sofarsounds.github.io/maestro).

## Developing

For local developing you can start up `storybook` to see the changes you're making. For that simply
run 
```
yarn start
```

Your browser will open storybook automatically, should that not be the case go to http://localhost:6006.

Here are a few guidelines:
- Make sure you split components appropriately. We believe in splitting components up into atoms, molecules and organisms.
- If you build logic that can be re-used (styling etc) create a `with{Logic}` util in the utils folder.
- Before writing new utils, check that your util hasn't already been built
- Everything should be tested. We prefer writing tests that check style-rules rather than creating snapshots. Check out [jest-styled-components](https://github.com/styled-components/jest-styled-components) for help and guides


# Contributing

We're hoping to make Maestro fully open source and would appreciate any contributions you make.

Please feel free to open an issue and report any Bugs or Feature Requests.
