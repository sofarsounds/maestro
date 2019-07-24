# Link

To implement `Link` into your project you'll need to add this import
```js
import { Link } from '@sofarsounds/maestro'
```

After adding the import you can use it simply like this
```html
<Link to="/your-route">I am a link</Link>
```

## Props
Table below contains all types of props available in the Link component  
*Info*: The router is wrapping a React Router Link so all props from that apply.

| Name          | Type          | Default         | Description                      |
| :------------ | :-----        | :-------------- | :------------------------------- |
| **children**  | `React.Node`  |                 | The content displayed in the Link
| to            | `string`      |                 | Where the link points to

## Additional Information

If you want to style all links globally you can import the `withLinkStyle` helper from maestro
and add this to your `GlobalStyle` like so:

```js
import { withLinkStyle } from '@sofarsounds/maestro'

const GlobalStyle = createGlobalStyle`
  a {
    ${withLinkStyle}
  }
`
```
