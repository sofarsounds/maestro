# Radio Button

To implement `Radio` into your project you'll need to add this import
```js
import { Radio } from '@sofarsounds/maestro'
```

After adding the import you can use it simply like this
```html
<Radio id="opt1" value="1" name="opt">Option 1</Radio>
<Radio id="opt2" value="2" name="opt">Option 2</Radio>
<Radio id="opt3" value="3" name="opt">Option 3</Radio>
<Radio id="opt4" value="4" name="opt" disabled>Option 4</Radio>
```

## Props
Table below contains all types of props available in the Radio component

**Note:** all other standard radio input html props apply

| Name          | Type          | Default         | Description                      |
| :------------ | :-----        | :-------------- | :------------------------------- |
| children      | `React.Node`  |                 | An optional label that you want to display with the radio box
| data-qaid     | `string`      |                 | Optional prop for testing purposes

