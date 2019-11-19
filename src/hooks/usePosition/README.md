# usePosition

The `usePosition` hook abstracts the logic behind getting an elements positioning and size.

To implement the `usePosition` hook you need to import
```js
import { usePosition } from '@sofarsounds/maestro'
```

After adding the import you can use the hook simply like this
```js
const Comp = () => {
  const ref = React.createRef()
  const { top, left, width, height } = usePosition(ref)
}
```

## Parameters
Table below contains all parameters

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **ref**       | `Ref` |                      | The element you want to watch
