# Textfield

To implement `Textfield` into your project you'll need to add this import
```js
import { Textfield } from '@sofarsounds/maestro'
```

After adding the import you can use it simply like this
```html
<Textfield />
```

## Implements

- [withTextfieldStyle](../../util/withTextfieldStyle)

## Props
Table below contains all types of props available in the Textfield component  
**Note**: All standard html textarea attributes are supported

| Name          | Type      | Default         | Description                      |
| :------------ | :-----    | :-------------- | :------------------------------- |
| hasError      | `Boolean` | `false`         | Whether the input has an error state
| data-qaid     | `string`  |                 | Optional prop for testing purposes
| id            | `string`  |                 | Default HTML id prop to identify the element
