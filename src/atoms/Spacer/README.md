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


```js
import { ResponsiveSpacer as Spacer } from '@sofarsounds/maestro';

const ResponsiveSpacer = ({ size }) => (
  <Spacer m={responsiveSize(size)} />
);

const responsiveSize = (size) => {
  // fetch responsive size from the scale
}
```

```html
<ResponsiveSpacer size={6} /> // equivalent to <Spacer mb={[4, 4, 6]} mr={[4, 4, 6]} />
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


In maestro our Typography components have responsiveness built in, but our normal usage of the Spacer component passes a `number` instead of a `number[]` as the margin prop which results in non-responsive spacing and inconsistencies between Typography size and spacing size (for example on small screens).

In fan-experience currently we use all different size spacers from size 2 to 20. A simpler, more constrainer scale might have some advantages for ease of development and communication between dev and design. 

It would also be necessary to clean up instances where we're not currently using Spacer components but should be, since this will only have impact if we're using Spacers consistently across our frontends. We'll also need to clean up our Typography components and any other elements that might define their own spacing. Generally it's better for the compositions at the page or organism level to define spacing between components, but whenever it's necessary for components to define spacing we should at least make sure it's responsive.


## Helper Requirements

**Backwards compatible** - all existing Spacers would continue to work and can be upgraded with minimal effort

**Responsive** - automatically works on different screen sizes without any developer input





