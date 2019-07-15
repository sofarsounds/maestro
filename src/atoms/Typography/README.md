# Typography

Typography bundles all available tags you can use. Text should *always* be wrapped into a Typography
tag provided by maestro to keep it consistent.

To implement a and Typography component into your project you'll need to add an import like this:
```js
import { H1, Body } from '@sofarsounds/maestro'
```

After adding the import you can use it simply like this
```html
<H1>I am a h1</H1>
<Body>I am a body tag</Body>
```

## Typography Elements

| Tag              | Default HTML Element |
| :--------------- | :------------------- |
| `Title`          | `h1`                 |
| `H1`             | `h1`                 |
| `H2`             | `h2`                 |
| `H3`             | `h3`                 |
| `H4`             | `h4`                 |
| `H5`             | `h5`                 |
| `H6`             | `h6`                 |
| `Body`           | `p`                  |
| `Body2`          | `p`                  |
| `Overline`       | `span`               |
| `Caption`        | `span`               |
| `FormGroupLabel` | `span`               |

## Props

Table below contains all types of props available in the Logo component  
**Note:** All Typography elements come equipped with the `withTypography` util.

| Name          | Type       | Default         | Description                      |
| :------------ | :-----     | :-------------- | :------------------------------- |
| **children**  | React.Node |                 | What to display within the tag
| spaceAfter    | number     |                 | How much space to add after element. Based on `withSpacing` util

