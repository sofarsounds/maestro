# withTypography

The `withTypography` util adds the standard textfield style to an element.

To implement `withTypography` in a component
```js
import { withTypography } from '@sofarsounds/maestro'
```

After adding the import you can use `withSpacing` like this
```js
const TextElement = styled.span`
  ${withTypography};
`
```

```html
<TextElement
  color="red"
  align="center"
  underline
  lineHeight={200}
  fontWeight="bold"
>
  I am a text
</TextElement>
```


## Props
Table below contains all types of props available in the withTypography util

| Name     | Type      | Default         | Description                      |
| :-----   | :-----    | :-------------- | :------------------------------- |
| color | `String` |                 | Customise the color
| align | [Align](#align) |                 | How the text should be aligned
| underline | `Boolean` |                 | Whether to add underline
| lineHeight | `Number` |                 | Customise the line height
| fontWeight | [Font Weight](#fontWeight) |                 | Customise the font weight

### Align

| align  |
| :---   |
| center |
| left   |
| right  |

### Font Weight

| fontWeight  |
| :---   |
| lighter |
| regular  |
| bold  |
