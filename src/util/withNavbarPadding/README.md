# withNavbarPadding

The `withNavbarPadding` util adds the correct top padding to a page where a
fixed Navbar has been implemented. By default it will add the `navbarHeight + 60px`
to the top of the page, leaving a gap.

To implement `withNavbarPadding` in a component
```js
import { withNavbarPadding } from '@sofarsounds/maestro'
```

After adding the import you can use `withNavbarPadding` like this
```js
body {
  ${withNavbarPadding};
}
```

## Props
Table below contains all types of props available in the withNavbarPadding util

| Name           | Type       | Default    | Description                      |
| :------------  | :----------| :--------- | :------------------------------- |
| stickToNavbar  | `Boolean`  | false      | Whether to remove the added spacing. Will make the next element stick directly to the navbar.
