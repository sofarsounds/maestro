# Responsive Wrapper

The responsive wrapper allows you to show or hide content based on the current screen size.
It will completely unmount a component rather than just show/hiding it with css.

To implement a `Responsive` wrapper into your project you'll need to add this import
```js
import { Responsive } from '@sofarsounds/maestro'
```

After adding the import you can use it simply like this
```html
<Responsive show="m3" />
```

## Props

Table below contains all types of props available in the Logo component  

| Name          | Type            | Default         | Description                      |
| :------------ | :-----          | :-------------- | :------------------------------- |
| **children**  | `React.Node`    |                 | The content to display or hide
| showOnSizes   | [Enum[]](#enum) |                 | Show given content on an array of screen sizes
| hide          | [Enum](#enum)   |                 | Hide given content on *exact* screen size only
| show          | [Enum](#enum)   |                 | Show given content on *exact* screen size only
| hideUp        | [Enum](#enum)   |                 | Hide given content on given screen size and up
| showUp        | [Enum](#enum)   |                 | Show given content on given screen size and up

### Enum

| Sizes |
| :---- |
| xs    |
| sm    |
| md    |
| lg    |
| xl    |
