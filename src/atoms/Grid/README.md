# Grid 
To implement a `Grid` into your project you'll need to add this import
```js
import { Grid, Col } from '@sofarsounds/maestro'
```

After adding the import you can use the Grid simply like this
```html
<Grid>
  <Col xs={12} sm={6}>
    A column
  </Col>
  <Col xs={12} sm={6}>
    A second column
  </Col>
</Grid>
```

If you'd like to add a row height to a column that use the `rows` attribute,
which uses css-grid's `grid-row` attribute.

```html
<Grid>
  <Col xs={12} sm={6} rows={2}>
    A column that will take 2 rows in height.
  </Col>
  <Col xs={12} sm={6}>
    A second column that will take 1 row.
  </Col>
</Grid>
```

## Grid Props

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | The content displayed in the grid
| cols          | `number`     |                 | Optional prop if you want a grid that isn't based on 12 columns
| gap           | `string`     | 20px            | Optional prop if you need more gap between rows and columns
| colGap        | `string`     | 20px            | Optional prop if you want to customise the gap between columns
| rowGap        | `string`     | 20px            | Optional prop if you want to customise the gap between rows
| data-qaid     | `string`     |                 | Optional prop for testing purposes
| id            | `string`     |                 | Default HTML id prop to identify the element

## Col Props

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | The content displayed in the column
| xs            | `number`     | 12              | Number of columns taken up on `xs` devices
| sm            | `number`     |                 | Number of columns taken up on `sm` devices
| md            | `number`     |                 | Number of columns taken up on `md` devices
| lg            | `number`     |                 | Number of columns taken up on `lg` devices
| xl            | `number`     |                 | Number of columns taken up on `xl` devices
| data-qaid     | `string`     |                 | Optional prop for testing purposes
| id            | `string`     |                 | Default HTML id prop to identify the element
| rows          | `number`     | 'auto'          | Number of rows taken up on all size screens
