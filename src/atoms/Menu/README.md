# Menu

To implement a `Menu` wrapper into your project you'll need to add this import
```js
import { Menu } from '@sofarsounds/maestro'
```

After adding the import you can use any button simply like this
```html
<Menu>
  Content in my menu
</Menu>
```

## Props
Table below contains all types of props available in the Menu component  

| Name          | Type        | Default         | Description                      |
| :------------ | :-----      | :-------------- | :------------------------------- |
| *children*    | `ReactNode` |                 | The content to be displayed
| bordered      | `Boolean`   | `false`         | Whether to add a border around the menu
| width         | `string `   | `false`         | Optional width for the logo
| depth         | `number`    | `3`             | Shadow depth
| data-qaid     | `string`    |                 | Optional prop for testing purposes



