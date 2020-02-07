# Select

To implement a readonly `Select` wrapper into your project you'll need to add this import
```js
import { Select } from '@sofarsounds/maestro'
```

After adding the import you can use it simply like this
```js
interface Cities = {
  id: number;
  title: string;
  country: string;
}

const cities = [
  { id: 1, title: 'London', country: 'UK },
  { id: 2, title: 'New York', country: 'USA' }
]

<Select<Cities>
  options={cities}
/>
```

## Implements

- [useDisableScroll](../../hooks/useDisableScroll)
- [useOutsideClick](../../hooks/useOutsideClick)
- [useKeyDown](../../hooks/useKeyDown)

## Select Props

Table below contains all types of props available in the Select component  

| Name                  | Type       | Default         | Description                      |
| :------------         | :-----     | :-------------- | :------------------------------- |
| **options**           | `Function` |                 | An array of options to render in the select
| **placeholder**       | `string`   |                 | The placeholder/label to display before a value has been selected
| getOptionValue        | `Function` | `id`            | If the option key is a different field than `id` you can override the default behaviour
| getOptionLabel        | `Function` | `title`         | If the label you want to display is any other field than `title` you can override the default behaviour
| renderOption          | `Function` |                 | Optional to render a custom option instead of the default one
| renderLeftIcon        | `Function` |                 | Render an icon component on the left next to the label
| handleOptionClick     | `Function` |                 | Optional funtion that's executed when selecting an option. Returns the options value
| positionFixed         | `Boolean`  | `false`         | Set to true when the Select is positioned fixed on the screen. Otherwise the Menu will scroll away
| disableScrollWhenOpen | `Boolean`  |                 | Disables body scroll when select is open
| id                    | `string`   |                 | Default HTML id prop to identify the element
| data-qaid             | `string`   |                 | Optional prop for testing purposes

