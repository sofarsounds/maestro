# Dropdown

To implement a `Dropdown` into your project you'll need to add this import
```js
import { Dropdown } from '@sofarsounds/maestro'
```

After adding the import you can use the Dropdown simply like this
```html
<Dropdown label="Dropdown Label">
  I am the content!
</Dropdown>

<Dropdown renderLabel={() => <b>Custom <i>Label</i></b>}>
  I have a custom label
</Dropdown>
```

## Props

| Name          | Type          | Default         | Description                      |
| :------------ | :-----        | :-------------- | :------------------------------- |
| **children**  | `React.Node`  |                 | The content displayed in the dropdown
| label         | `string`      |                 | Label of the component
| renderLabel   | `Function`    |                 | Optional prop to render a React component as Label
| size          | [Enum](#enum) |                 | The size of the flyout component
| data-qaid     | `string`      |                 | Optional prop for testing purposes

### Enum

| Size  |
| :---  |
| small |
| large |

