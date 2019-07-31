# PortalComponent

The `PortalComponent` allows you to render content in a different parent element. This is extremely useful for exampel for Modals or content that you want to render on top of everything else without having to mess around with z-indexes.

To implement a `PortalComponent` into your project you'll need to add this import
```js
import { PortalComponent } from '@sofarsounds/maestro'
```

After adding the import you can use the PortalComponent simply like this
```html
<PortalComponent dom={document.getElementById('body')}>
  I render at the end of the body tag
</PortalComponent>
```

## Props
Table below contains all types of props available in the PortalComponent 

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | The content to be rendered in the PortalComponent
| **dom**       | `Element`    |                 | Where to render the content (Dom element)

