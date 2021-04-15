# Popper

The `Popper` allows you to render content that sticks to another element. We mostly
use it in conjuction with the `PortalComponent` to create for example a dropdown flyout container.

To implement a `Popper` into your project you'll need to add this import
```js
import { Popper } from '@sofarsounds/maestro'
```

After adding the import you can use the StickyContainer simply like this
```html
const ref = useRef<any>()

<div ref={ref}>
  Something is going to be sticky...
</div>

<Popper
  anchorEl={ref}
  anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  keepInViewPort={true|false}
  flip={true|false}
>
  I am sticky...
</Popper>
```

## Props
Table below contains all types of props available in the Popper

| Name            | Type                                          | Default         | Description                      |
| :------------   | :------------------------                     | :-------------- | :------------------------------- |
| **children**    | `React.Node`                                  |                 | The content to be rendered in the StickyContainer
| **anchorEl**    | `Ref`                                         |                 | The element this container will stick to
| anchorOrigin    | [Origin](#origin)                             |                 | Set the anchor origin position for the element
| transformOrigin | [Origin](#origin)                             |                 | Customise the transform origin for the sticky container
| offset          | [Offset](#offset)                             |                 | Set a vertical & horizontal offset
| keepInViewPort  | [KeepInViewPort](#keepInViewPort) | `Boolean` | false           | Whether the StickyContainer should
| flip            | `Boolean`                                     |                 | flip placement when it starts to overlap. Will override the `keepInViewPort` behaviour

### Origin

| origin     | Type   | values                        |
| :---       | :---   | :---                          |
| vertical   | String | `top` `bottom` `left` `right` |
| horizontal | String | `top` `bottom` `left` `right` |

### Offset

| origin     | Type   |
| :---       | :---   |
| vertical   | Number |
| horizontal | Number |

### KeepInViewPort

| origin     | Type    |
| :---       | :---    |
| vertical   | boolean |
| horizontal | boolean |
