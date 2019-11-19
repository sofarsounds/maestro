# withShadow

The `withShadow` util adds a box-shadow to the element it has been applied to.

To implement `withShadow` in a component
```js
import { withShadow } from '@sofarsounds/maestro'
```

After adding the import you can use `withShadow` like this
```js
const DivWithShadow = styled.div`
  ${withShadow};
`
```

Or, if you'd like to have a fixed shadow (not customisable via props)
```js
const DivWithShadow = styled.div`
  ${withShadow({ depth: 3 })};
`
```

## Props
Table below contains all types of props available in the withShadow util

| Name           | Type       | Default    | Description                      |
| :-------  | :----------| :--------- | :------------------------------- |
| **depth**  | Number (`1 - 5`)  |       | The depth of the shadow
