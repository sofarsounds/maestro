# 🎻 Maestro

[![CircleCI](https://circleci.com/gh/sofarsounds/maestro/tree/master.svg?style=svg)](https://circleci.com/gh/sofarsounds/maestro/tree/master)
[![CircleCI](https://circleci.com/gh/sofarsounds/maestro/tree/develop.svg?style=svg)](https://circleci.com/gh/sofarsounds/maestro/tree/develop)

Sofar Sounds' Maestro is a React component library which is built after our official design system
and helps our developers build a consistent user experience.

## Sofar Mission

Sofar Sounds is reimagining the live event experience through curated, intimate performances in 438 cities around the world.

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
provide the GlobalStyle we have created which automatically provides our brand font (Open Sans)
and does some basic HTML styling.

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

## Contributing

We're hoping to make Maestro fully open source and would appreciate any contributions you make.

Please feel free to open an issue and report any Bugs or Feature Requests.
