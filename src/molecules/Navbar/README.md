# Navbar

To implement a `Navbar` into your project you'll need to add this import
```js
import { Navbar } from '@sofarsounds/maestro'
```

After adding the import you can use the Pagination simply like this
```html
<Navbar
  fixed
  invert={false}
  logoLinkTo="https://www.sofarsounds.com"
>
  <Navbar.ItemContainer>
    <Navbar.Item href="/home">Home</Navbar.Item>
    <Navbar.Item href="/about">About</Navbar.Item>
  </Navbar.ItemContainer>
  <Navbar.ItemContainer align="right">
    <Navbar.Item href="/account">Account</Navbar.Item>
    <Navbar.Item href="/logout">Logout</Navbar.Item>
  </Navbar.ItemContainer>
</Navbar>
```

**Info**: The navbar will *automatically* collapse on smaller screens and render a hamburger
icon that can expand the navbar.

## `Navbar` Props

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | The content to be rendered in the navbar
| fixed         | `Boolean`    |                 | Whether the navbar is fixed to the top of the screen
| invert        | `Boolean`    |                 | Whether to invert the colour of the navbar
| logoLinkTo    | `string`     |                 | Where does clicking the logo link to
| data-qaid     | `string`     |                 | Optional prop for testing purposes


## `Navbar.ItemContainer` Props

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | The content to be rendered in this section
| align         | `string`     | `left`          | Whether to align the items to the left or right
| data-qaid     | `string`     |                 | Optional prop for testing purposes


## `Navbar.Item` Props

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | The content to be rendered in this link
| href          | `string`     |                 | Whether to align the items to the left or right
| data-qaid     | `string`     |                 | Optional prop for testing purposes

