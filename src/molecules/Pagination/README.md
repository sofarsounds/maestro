# Pagination

To implement a `Pagination` into your project you'll need to add this import
```js
import { Pagination } from '@sofarsounds/maestro'
```

After adding the import you can use the Pagination simply like this
```html
<Pagination
  totalRecords={400}
  perPage={10}
  currentPage={4}
  onPageChange={p => console.log('new page', p)}
/>
```

## Props

| Name             | Type       | Default         | Description                      |
| :------------    | :-----     | :-------------- | :------------------------------- |
| **totalRecords** | `number`   |                 | Number of total records available
| **onPageChange** | `Function` |                 | Callback when page is being changed. Returns new page number
| perPage          | `number`   | `8`             | Customise how many items are being display per page
| currentPage      | `number`   | `1`             | Set the current page
| data-qaid        | `string`   |                 | Optional prop for testing purposes

