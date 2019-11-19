# useOutsideClick

The `useOutsideClick` hook abstracts the logic behind handling outside-element clicks.

To implement the `useOutsideClick` hook you need to import
```js
import { useOutsideClick } from '@sofarsounds/maestro'
```

After adding the import you can use the hook simply like this
```js
const Comp = () => {
  const ref = React.createRef()
  useOutsideClick(ref, () => {
    console.log('Outside click detected')
  })
}
```

## Parameters
Table below contains all parameters

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **ref**       | `Ref` |                      | The element you want to listen for outside clicks on
| **callback**  | `Function`    |                 | The callback to execute when an outside click has been executed
