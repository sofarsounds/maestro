# Snackbar

To implement a `Snackbar` into your project you'll need to add this import
```js
import { Snackbar } from '@sofarsounds/maestro'
```

After adding the import you can use it simply like this
```html
<Snackbar onCancel={() => {}}>
  Snackbar content
</Snackbar>
```

## Props
Table below contains all types of props available in the Logo component  

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | The content to display in the snackbar
| **onCancel**  | `Function`   |                 | Function to execute when clicking the "x"
| data-qaid     | `string`     |                 | Optional prop for testing purposes
| id            | `string`     |                 | Default HTML id prop to identify the element
