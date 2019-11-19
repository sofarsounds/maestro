# Spacer

The `Spacer` component can be used to add margins and paddings to elements. It works based of the
main ruler defined in the theme which works on multiple of fours.  
You can also specify different margins based on screen size by providing an array of numbers.

To implement a `Spacer` wrapper into your project you'll need to add this import
```js
import { Spacer } from '@sofarsounds/maestro'
```

After adding the import you can use it simply like this
```html
<Spacer mb={2} /> // 8px on all screen sizes
<Spacer mb={[2, 4, 6]} /> // 8px on xs,  16px on sm, 24px on md devices
```

## Implements

- [withSpacing](../../util/withSpacing)

## Props
Table below contains all types of props available in the Logo component  

| Name   | Type                | Default         | Description                      |
| :----- | :-----              | :-------------- | :------------------------------- |
| m      | `number` `number[]` |                 | Add a margin on all directions
| mt     | `number` `number[]` |                 | Add a margin top
| mr     | `number` `number[]` |                 | Add a margin right
| ml     | `number` `number[]` |                 | Add a margin bottom
| mr     | `number` `number[]` |                 | Add a margin left
| p      | `number` `number[]` |                 | Add a padding on all directions
| pt     | `number` `number[]` |                 | Add a padding top
| pr     | `number` `number[]` |                 | Add a padding right
| pl     | `number` `number[]` |                 | Add a padding bottom
| pr     | `number` `number[]` |                 | Add a padding left
