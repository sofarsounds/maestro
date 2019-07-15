# Icon
To implement a `Icon` into your project you'll need to add this import
```js
import { Icon } from '@sofarsounds/maestro'
```

After adding the import you can use the Grid simply like this
```html
<Icon name="facebook" />
```

## Props

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | The content displayed in the grid
| **name**      | `string`     |                 | Name of the icon to display (found in registry)
| size          | `string`     |                 | Optional size for the icon
| colour        | `string`     | `#000`          | Optional colouring (hexcode)
| className     | `string`     |                 | Optional prop to add a className to the icon
| data-qaid     | `string`     |                 | Optional prop for testing purposes



