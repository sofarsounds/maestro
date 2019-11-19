# useKeyDown

The `useKeyDown` hook allows you to listen to keyboard interactions

To implement the `useKeyDown` hook you need to import
```js
import { useKeyDown } from '@sofarsounds/maestro'
```

After adding the import you can use the hook simply like this
```js
const Comp = () => {
  useKeyDown('Enter', () => {
    console.log('I am the callback')
  });

  return <div>Component..</div>
}
```

## Parameters
Table below contains all parameters

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **Key**       | `String` |                 | The key you want to listen for
| **callback**  | `Function`    |                 | The callback to execute when that key has been hit
