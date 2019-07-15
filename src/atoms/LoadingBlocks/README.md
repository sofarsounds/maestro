# Loading Blocks

To implement a `Loading Block` into your project you'll need to add this import
```js
import { LoadingBlocks } from '@sofarsounds/maestro'
```

After adding the import you can use any button simply like this
```html
<LoadingBlock.Box />
<LoadingBlock.Rectangle />
<LoadingBlock.Circle />
```

## Box & Circle Props
Table below contains all types of props available in the Box & Cicle component  

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| width         | `string`     |                 | Width + Height of the component
| data-testid   | `string`     |                 | Optional prop for testing purposes

## Rectangle Props
Table below contains all types of props available in the Rectangle component  

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| width         | `string`     |                 | Width of the component
| height        | `string`     |                 | Height of the component
| data-testid   | `string`     |                 | Optional prop for testing purposes
