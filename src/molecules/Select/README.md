# Select

To implement a `Select` wrapper into your project you'll need to add this import
```js
import { Select, Option } from '@sofarsounds/maestro'
```

After adding the import you can use it simply like this
```html

<Select placeholder="Gender">
  <Option value="m">Male</Option>
  <Option value="f">Female</Option>
</Select>
```

## Select Props

Table below contains all types of props available in the Select component  

| Name                  | Type       | Default         | Description                      |
| :------------         | :-----     | :-------------- | :------------------------------- |
| **children**          | `Function` |                 | Render the `Option`s for the select
| **placeholder**       | `string`   |                 | The placeholder/label to display in the select field
| handleOptionClick     | `Function` |                 | Optional funtion that's executed when selecting an option. Returns the options value
| positionFixed         | `Boolean`  | `false`         | Set to true when the Select is positioned fixed on the screen. Otherwise the Menu will scroll away
| disableScrollWhenOpen | `Boolean`  |                 | Disables body scroll when select is open
| id                    | `string`   |                 | Default HTML id prop to identify the element

## Option Props

Table below contains all types of props available in the Option component  

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | The content to render in the option
| value         | `string`     |                 | The value for the given option that will be returned when selecting the option
| disabled      | `Boolean`    | false           | Whether the option is enabled or not
| error         | `Boolean`    | false           | Whether the option is highlighted with an error state
| onClick       | `Function`   |                 | The function that's executed when clicking this option
