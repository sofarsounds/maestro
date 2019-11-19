# usePrev

The `usePrev` hook exposes the previous props. This behaviour is similar to `componentDidUpdate` lifecycle hook.

To implement the `usePrev` hook you need to import
```js
import { usePrev } from '@sofarsounds/maestro'
```

After adding the import you can use the hook simply like this
```js
const Comp = (isOpen) => {
  const prevIsOpen = usePrev(isOpen);
}
```

## Parameters
Table below contains all parameters

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **valueToWatch**  | `any` |                      | The value you want to watch
