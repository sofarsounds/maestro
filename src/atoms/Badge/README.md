# Badge

To implement `Badge` into your project you'll need to add this import
```js
import { Badge } from '@sofarsounds/maestro'
```

After adding the import you can use it simply like this
```html
<Badge>12</Badge>
```

## Props
Table below contains all types of props available in the Badge component

| Name          | Type          | Default         | Description                      |
| :------------ | :-----        | :-------------- | :------------------------------- |
| **children**  | `React.Node`  |                 | The content displayed in the badge
| colour        | [Enum](#enum) |                 | Optional prop to specifiy a colour. Otherwise background is transparent
| clickable     | `Boolean`     | `false`         | Whether the badge should have a cursor pointer and hover state
| disabled      | `Boolean`     | `false`         | Whether the prop has a disabled state
| data-qaid     | `string`      |                 | Optional prop for testing purposes

### Enum
| type    |
| :-------|
| primary |
