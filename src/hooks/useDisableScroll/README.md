# useDisableScroll

The `useDisableScroll` hook allows you to disable the body scroll when the `isOpen`
parameter is set to true. This is useful for opening Modals and not having the content behind scroll.

To implement the `useDisableScroll` hook you need to import
```js
import { useDisableScroll } from '@sofarsounds/maestro'
```

After adding the import you can use the hook simply like this
```js
const Comp = () => {
  const [isOpen, setIsOpen] = useState(false);
  useDisableScroll(isOpen);

  return <div>Component..</div>
}
```

## Parameters
Table below contains all parameters

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **isOpen**  | `Boolean` |                 | Whether the current state is open
| **disableScrollWhenOpen**       | `Boolean`    |                 | Whether to enable the disable scroll behaviour
