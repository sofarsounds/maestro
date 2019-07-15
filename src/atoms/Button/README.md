# Button

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

## Props
Table below contains all types of props available in any Button component  
*all other standard button html props apply*

| Name          | Type  | Default         | Description                      |
| :------------ | :-----| :-------------- | :------------------------------- |
| **children** | `React.Node`   |           | The content displayed in the button 
| loading | `Boolean`      | `false`   | Whether the button should have a loading state
| small | `Boolean`      | `false`   | Whether the button should be displayed in a small version
| data-testid  | `string`       |           | Optional prop for testing purposes                                       

### OutlineButton Props
| Name          | Type  | Default         | Description                      |
| :------------ | :-----| :-------------- | :------------------------------- |
| colour | `primary | black | white`   | `primary`| Which colour the outline and text should be
