# Portal

The `Portal` allows you to render content in a different parent element. This is extremely useful for exampel for Modals or content that you want to render on top of everything else without having to mess around with z-indexes.

To implement a `Portal` into your project you'll need to add this import
```js
import { Portal } from '@sofarsounds/maestro'
```

After adding the import you can use the Portal simply like this
```html
<Portal dom={document.getElementById('body')}>
  I render at the end of the body tag
</Portal>
```

## Props
Table below contains all types of props available in the Portal 

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | The content to be rendered in the Portal
| **dom**       | `Element`    |                 | Where to render the content (Dom element)

