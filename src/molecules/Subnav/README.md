# Subnav

To implement a `Subnav` into your project you'll need to add this import
```js
import { Subnav } from '@sofarsounds/maestro'
```

After adding the import you can use the Pagination simply like this
```html
<Subnav>
  <Subnav.Link to="/home">Home</Subnav.Link>
  <Subnav.Link to="/about">About</Subnav.Link>
</Subnav>
```

## Props

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | The Links to be displayed in the subnav
| data-qaid     | `string`     |                 | Optional prop for testing purposes


## `Subnav.Link` Props

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | The content to be displayed within the link
| active        | `Boolean`    |                 | Whether this link is active
| data-qaid     | `string`     |                 | Optional prop for testing purposes
