# FormGroup

To implement a `FormGroup` into your project you'll need to add this import
```js
import { FormGroup, Textfield } from '@sofarsounds/maestro'
```

After adding the import you can use the Dropdown simply like this
```html
<FormGroup label="First name" required errorMsg="First name is required">
  <Textfield placeholder="First name" />
</FormGroup>
```

**Note**: When using `errorMsg` all input elements provided by maestro will automatically provided
with the `hasError` prop and render in the error state

## Props

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | Any component (i.e. `Textfield`)
| label         | `string`     |                 | Label for the form group
| required      | `boolean`    |                 | Whether to show the required indicator (*)
| errorMsg      | `string`     |                 | Show the given error message in this form group
| data-qaid     | `string`     |                 | Optional prop for testing purposes
