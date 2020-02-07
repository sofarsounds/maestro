# useSelect

The `useSelect` hook can be used to build Select components with typeahead functionality

To implement the `useSelect` hook you need to import
```js
import { useSelect } from '@sofarsounds/maestro'
```

After adding the import you can use the hook simply like this
```js
const Comp = () => {
  const {
    selectRef,
    isOpen,
    labelText,
    onToggle,
    onOptionClick
  } = useSelect()
}
```

