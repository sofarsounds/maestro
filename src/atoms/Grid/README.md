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

If you'd like a column to start further across the x axis you can use:
```html
<Grid>
  <Col xs={12} sm={5}>
    A column
  </Col>
  <Col xs={12} sm={6} xmStart={7}>
    A second column
  </Col>
</Grid>
```

If you'd like to add a row height to a column that use the `rowSpan` attribute,
which uses css-grid's `grid-row` attribute.

```html
<Grid>
  <Col xs={12} sm={6} rowSpan={2}>
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
| xsStart       | `number`     | auto            | Column No on X axis to start col on `xs` devices
| smStart       | `number`     | auto            | Column No on X axis to start col on `sm` devices
| mdStart       | `number`     | auto            | Column No on X axis to start col on `md` devices
| lgStart       | `number`     | auto            | Column No on X axis to start col on `lg` devices
| xlStart       | `number`     | auto            | Column No on X axis to start col on `xl` devices
| data-qaid     | `string`     |                 | Optional prop for testing purposes
| id            | `string`     |                 | Default HTML id prop to identify the element
| rowSpan       | `number`     | 'auto'          | Number of rows taken up on all size screens
