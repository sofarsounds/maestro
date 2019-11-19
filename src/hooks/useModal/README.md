# useModal

The `useModal` hook abstracts the logic behind showing & hiding a Modal into a hook.

To implement the `useModal` hook you need to import
```js
import { useModal } from '@sofarsounds/maestro'
```

After adding the import you can use the hook simply like this
```js
const Comp = () => {
  const [{ isShowing, hide }, toggle] = useModal()

  return <div>Component..</div>
}
```
