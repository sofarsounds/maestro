# ProgressBar

To implement a `Button` into your project you'll need to add this import
```js
import { ProgressBar } from '@sofarsounds/maestro'
```

After adding the import you can use any button simply like this
```html
<ProgressBar percentage={50} />
```

You can also set the ProgressBar to render in any of the theme colors.
```html
<ProgressBar percentage={50} color="green600" />
```

The width of the bar can also be configured to fit your use case.
```html
<ProgressBar percentage={50} width="250px" />
```

## Props
Table below contains all types of props available in any Button component  
**Note:** all other standard button html props apply

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| percentage    | `number`     | `0`             | The percentage of the progress bar that should be filled
| color         | `Colors`     | `"blueSmoke"`   | The color of the progress bar, one of the theme colors
| block         | `Boolean`    | `"120px"`       | The width of the progress bar
| data-qaid     | `string`     |                 | Optional prop for testing purposes
