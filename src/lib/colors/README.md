# Color Helpers

Color helpers are reused utils to modify and transform colors.

## makeOpaque

Takes in a hexcode and opacity and transforms it into `rgba` format

```js
import { makeOpaque } from '@sofarsounds/maestro'

const hexcode = '#000000'
const opaque = makeOpaque(hexcode, 0.5)

opaque = 'rgba(0, 0, 0, 0.5)'
```
