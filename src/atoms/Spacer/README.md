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

# Sized Responsive Spacers

For convenience, we have also added a number of sized Spacer components which have responsiveness built-in: `Spacer4`, `Spacer8`, `Spacer12`, `Spacer16`, `Spacer20`, `Spacer24`, `Spacer32`, `Spacer40`, `Spacer48`, `Spacer56`, `Spacer64`, `Spacer72`, and `Spacer80`. These spacers and named after their size (in pixels) on XL (desktop) screens. 

To add named `Spacer` wrappers into your project you'll first need to import the `Spacer` components that you want to add
```js
import { 
  Spacer4, 
  Spacer16, 
  Spacer64 
} from '@sofarsounds/maestro'
```

After adding the import, use the components in your project without any props or children 
```html
<Spacer4 /> // 4px on all screen sizes
<Spacer16 /> // 8px on xs and sm, 12px on md devices, 16px on lg and xl devices
<Spacer64 /> // 32px on xs and sm,  48px on md devices, 64px on lg and xl devices
```

Note: If you want to use a spacer with children, fall back to using the unsized `Spacer` component.
