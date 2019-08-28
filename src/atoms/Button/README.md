# Button

To implement a `Button` into your project you'll need to add this import
```js
import { PrimaryButton, OutlineButton, LinkButton } from '@sofarsounds/maestro'
```

After adding the import you can use any button simply like this
```html
<PrimaryButton>Primary Button</PrimaryButton>
<OutlineButton>Outline Button</OutlineButton>
<LinkButton>Link Button</LinkButton>
```

You can also use the Button in combination with an icon which will be automatically aligned
and coloured correctly.
```html
<PrimaryButton>
  <Icon name="helpCircleOutline" />
  Help me please!
</PrimaryButton>
```

## Props
Table below contains all types of props available in any Button component  
**Note:** all other standard button html props apply

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | The content displayed in the button
| loading       | `Boolean`    | `false`         | Whether the button should have a loading animation
| small         | `Boolean`    | `false`         | Whether the button should be displayed in a small version
| block         | `Boolean`    | `false`         | Whether the button should be displayed as block
| data-qaid     | `string`     |                 | Optional prop for testing purposes
| id            | `string`     |                 | Default HTML id prop to identify the element

### OutlineButton Props
| Name          | Type          | Default         | Description                      |
| :------------ | :-----        | :-------------- | :------------------------------- |
| color        | [Enum](#enum) | `primary`       | Which color the outline and text should be

#### Enum
| color  |
| :-----  |
| primary |
| black   |
| white   |
