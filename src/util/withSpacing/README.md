# withSpacing

The `withSpacing` util allows the developer to add custom spacing to elements
the util has been applied to.

To implement `withSpacing` in a component
```js
import { withSpacing } from '@sofarsounds/maestro'
```

After adding the import you can use `withSpacing` like this
```js
const DivWithSpacing = styled.div`
  ${withSpacing};
`
```

```html
<DivWithSpacing mb={2} /> // 8px on all screen sizes
<DivWithSpacing mb={[2, 4, 6]} /> // 8px on xs,  16px on sm, 24px on md devices
```


## Props
Table below contains all types of props available in the withSpacing util

| Name   | Type                | Default         | Description                      |
| :----- | :-----              | :-------------- | :------------------------------- |
| m      | `number` `number[]` |                 | Add a margin on all directions
| mt     | `number` `number[]` |                 | Add a margin top
| mr     | `number` `number[]` |                 | Add a margin right
| mb     | `number` `number[]` |                 | Add a margin bottom
| ml     | `number` `number[]` |                 | Add a margin left
| p      | `number` `number[]` |                 | Add a padding on all directions
| pt     | `number` `number[]` |                 | Add a padding top
| pr     | `number` `number[]` |                 | Add a padding right
| pb     | `number` `number[]` |                 | Add a padding bottom
| pl     | `number` `number[]` |                 | Add a padding left
