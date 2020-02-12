# MenuItem

To implement a `MenuItem` wrapper into your project you'll need to add this import
```js
import { MenuItem } from '@sofarsounds/maestro'
```

After adding the import you can use a MenuItem simply like this
```html
<MenuItem>I am beautiful</Menu>
```

## Props
Table below contains all types of props available in the Menu component  

| Name          | Type        | Default         | Description                      |
| :------------ | :-----      | :-------------- | :------------------------------- |
| *children*    | `ReactNode` |                 | The content to be displayed
| onClick       | `Boolean`   |                 | An onClick handler for the option
| data-qaid     | `string`    |                 | Optional prop for testing purposes
