# useWindowSize

The `useWindowSize` hook returns the current window size.

To implement the `useWindowSize` hook you need to import
```js
import { useWindowSize } from '@sofarsounds/maestro'
```

After adding the import you can use the hook simply like this
```js
const Comp = () => {
  const [width, height] = useWindowSize()
}
```
