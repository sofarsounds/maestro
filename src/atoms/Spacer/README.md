# Spacer

The `Spacer` component can be used to add margins and paddings to elements. It works based of the
main ruler defined in the theme which works on multiple of fours.  
You can also specify different margins based on screen size by providing an array of numbers.

To implement a `Spacer` wrapper into your project you'll need to add this import
```js
import { Spacer } from '@sofarsounds/maestro'
```

After adding the import you can use it simply like this
```html
<Spacer mb={2} /> // 8px on all screen sizes
<Spacer mb={[2, 4, 6]} /> // 8px on xs,  16px on sm, 24px on md devices
```

## Implements

- [withSpacing](../../util/withSpacing)

## Props
Table below contains all types of props available in the Spacer component  

| Name   | Type                | Default         | Description                      |
| :----- | :-----              | :-------------- | :------------------------------- |
| m      | `number` `number[]` |                 | Add a margin on all directions
| mt     | `number` `number[]` |                 | Add a margin top
| mr     | `number` `number[]` |                 | Add a margin right
| mb     | `number` `number[]` |                 | Add a margin bottom
| ml     | `number` `number[]` |                 | Add a margin left
| p      | `number` `number[]` |                 | Add a padding on all directions
| pt     | `number` `number[]` |                 | Add a padding top
| pr     | `number` `number[]` |                 | Add a padding right
| pb     | `number` `number[]` |                 | Add a padding bottom
| pl     | `number` `number[]` |                 | Add a padding left



## Spacer Helper


```
import { ResponsiveSpacer as Spacer } from '@sofarsounds/maestro';

<ResponsiveSpacer size={6} /> // equivalent to <Spacer mb={[4, 4, 6]}

const ResponsiveSpacer = ({ size }) => (
  <Spacer mb={responsiveSize(size)}
);

const responsiveSize = (size) => {
  // fetch responsive size from the scale
}
```



| Size   | Type      | Responsive Size         
| :----- | :-----    | :-------------- 
| 1      | `number`  | `[1, 1, 1]`                
| 2      | `number`  | `[2, 2, 2]`                
| 3      | `number`  | `[3, 3, 3]`                
| 4      | `number`  | `[3, 3, 4]`                
| 5      | `number`  | `[4, 4, 5]`                
| 6      | `number`  | `[4, 4, 6]`                
| 7      | `number`  | `[5, 5, 7]`                
| 8      | `number`  | `[6, 6, 9]`                
| 9      | `number`  | `[7, 7, 10]`                
| 10     | `number`  | `[8, 8, 12]`                


In fan-experience currently we use all different size spacers from size 2 to 20. A simpler, more constrained spacing interface could allow us to go back and make all of this fan-experience code more consistent and responsive. It would also be necessary to clean up instances where we're not currently using Spacer components but should be, since this will only have impact if we're using Spacers consistently across our frontends.


## Advantages

**Backwards compatible** - all existing Spacers would continue to work and can be upgraded with minimal effort

**Responsive** - automatically works on different screen sizes without any developer input





