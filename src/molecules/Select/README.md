# Select

To implement a readonly `Select` wrapper into your project you'll need to add this import

```js
import { Select } from '@sofarsounds/maestro';
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

- [useSelect](../../hooks/useSelect)

## Select Props

Table below contains all types of props available in the Select component

| Name                   | Type            | Default | Description                                                                                                           |
| :--------------------- | :-------------- | :------ | :-------------------------------------------------------------------------------------------------------------------- |
| **options**            | `Array`         |         | An array of options to render in the select                                                                           |
| **onChange**           | `Function`      |         | Callback for when an option has been selected. Returns the entire option object                                       |
| **placeholder**        | `string`        |         | The placeholder/label to display before a value has been selected                                                     |
| **getOptionLabel**     | `Function`      |         | Required to determine what to render as the label. Returns the current option object                                  |
| defaultValue           | `Option / null` |         | If a default value has been set, pass in the reference matching object in.                                            |
| state                  | [Enum](#enum)   | `ready` | The state of the select (ready, loading, or error)                                                                    |
| searchable             | `Boolean`       |         | Whether the select is searchable                                                                                      |
| filterBy               | `Function`      |         | A custom filter function that can be passed in                                                                        |
| renderOption           | `Function`      |         | Optional to render a custom option instead of the default one                                                         |
| renderLeftIcon         | `Function`      |         | Render an icon component on the left next to the label                                                                |
| popularOptions         | `Array`         |         | A set of options that is displayed before the user starts filtering the list. Only works when `searchable` is `true`. |
| getPopularOptionsTitle | `Function`      |         | Customise the title that is displayed for the group of popular options                                                |
| groupBy                | `Function`      |         | A custom group by function to create a grouped select.                                                                |
| disableScrollWhenOpen  | `Boolean`       |         | Disables body scroll when select is open                                                                              |
| initialWidth           | `String`        |         | Render the Select with a different width when closed to when opened                                                   |
| id                     | `string`        |         | Default HTML id prop to identify the element by id                                                                    |
| name                   | `string`        |         | Default HTML id prop to identify the element by name                                                                  |
| data-qaid              | `string`        |         | Optional prop for testing purposes                                                                                    |

### Enum

| type    |
| :------ |
| ready   |
| loading |
| error   |
