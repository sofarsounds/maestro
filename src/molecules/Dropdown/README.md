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

## Implements

- [useDisableScroll](../../hooks/useDisableScroll)

## Props

| Name                  | Type          | Default         | Description                      |
| :------------         | :-----        | :-------------- | :------------------------------- |
| **children**          | `React.Node`  |                 | The content displayed in the dropdown
| label                 | `string`      |                 | Label of the component
| renderLabel           | `Function`    |                 | Optional prop to render a React component as Label
| offsetTop             | `Number`      |                 | Moves the dropdown content down by given amount of pixels
| size                  | [Enum](#enum) |                 | The size of the flyout component
| flyoutContainer       | `Boolean`     |                 | Whether to display the default flyout container
| disableScrollWhenOpen | `Boolean`     |                 | Disables body scroll when dropdown is open
| keepInViewPort        | `Boolean`     |                 | Always keep the dropdown flyout within the viewport
| data-qaid             | `string`      |                 | Optional prop for testing purposes
| id                    | `string`      |                 | Default HTML id prop to identify the element

### Enum

| Size  |
| :---  |
| small |
| large |
