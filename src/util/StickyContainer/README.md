# StickyContainer

The `StickyContainer` allows you to render content that sticks to another element. We mostly
use it in conjuction with the `PortalComponent` to create for example a dropdown flyout container.

To implement a `StickyContainer` into your project you'll need to add this import
```js
import { StickyContainer } from '@sofarsounds/maestro'
```

After adding the import you can use the StickyContainer simply like this
```html
const ref = useRef<any>()

<div ref={ref}>
  Something is going to be sticky...
</div>

<StickyContainer stickToEl={ref.current}>
  I'm well sticky...
</StickyContainer>
```

**Note** The StickyContainer is not tested yet so use it on your own risk!

## Props
Table below contains all types of props available in the StickyContainer

| Name          | Type                      | Default         | Description                      |
| :------------ | :------------------------ | :-------------- | :------------------------------- |
| **children**  | `React.Node`              |                 | The content to be rendered in the StickyContainer
| **stickToEl** | `Element`, `Text`, `null` |                 | The element this container will stick to
| stickTo       | `top`, `bottom`           | bottom          | Whether it sticks to the top or bottom of the target container (`stickToEl`)
| offsetTop     | `Number`                  |                 | Whether you want to offset the StickyContainer by an amount of pixels from the target cointainer
| positionFixed | `Boolean`                 |                 | Set to true if the target element is positioned fixed on the page
| styleOptions  | `String[]`                |                 | Override certain css attributes for the StickyContainer such as z-index


