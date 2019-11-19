# withTextfieldStyle

The `withTextfieldStyle` util adds the standard textfield style to an element.

To implement `withTextfieldStyle` in a component
```js
import { withTextfieldStyle } from '@sofarsounds/maestro'
```

After adding the import you can use `withSpacing` like this
```js
const AnInput = styled.input`
  ${withTextfieldStyle};
`
```

```html
<AnInput placeholder="I got style" />
```


## Props
Table below contains all types of props available in the withSpacing util

| Name     | Type      | Default         | Description                      |
| :-----   | :-----    | :-------------- | :------------------------------- |
| hasError | `Boolean` |                 | Whether the input is in error style
