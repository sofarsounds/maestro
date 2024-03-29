# HeroImage

To implement a `HeroImage` into your project you'll need to add this import
```js
import { HeroImage } from '@sofarsounds/maestro'
```

After adding the import you can use the HeroImage simply like this
```html
<HeroImage
  parallax
  imageUrl="url-to-your-image"
  title="Main Title"
  subtitle"Optional Subtitle"
  height="300px"
>
  <button>custom action</button>
</HeroImage>
```

## Props

| Name          | Type              | Default         | Description                      |
| :------------ | :-----            | :-------------- | :------------------------------- |
| imageUrl      | `string`          |                 | URL to the background image to be rendered
| images        | [Object](#object) |                 | URLs to the background image to be rendered for different screen sizes
| **title**     | `string`          |                 | The main title to display
| subtitle      | `string`          |                 | Optional subtitle to display
| height        | `string`          | `300px`         | Override the default height of the hero image (300px)
| children      | `React.Node`      |                 | Optional children (i.e. actions)
| parallax      | `boolean`         |                 | Whether to enable parallax scrolling for the header
| errorMsg      | `string`          |                 | Show the given error message in this form group
| data-qaid     | `string`          |                 | Optional prop for testing purposes
| id            | `string`          |                 | Default HTML id prop to identify the element

### Object

| Name    | Type        | Default         | Description                      |
| :-------| :-----      | :-------------- | :------------------------------- |
| xs      | `string`     |                | URL to the background image for xs breakpoint
| sm      | `string`     |                | URL to the background image for sm breakpoint
| md      | `string`     |                | URL to the background image for md breakpoint
| lg      | `string`     |                | URL to the background image for lg breakpoint
| xl      | `string`     |                | URL to the background image for xl breakpoint
