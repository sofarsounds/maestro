# Textarea

To implement `Card` into your project you'll need to add this import
```js
import { Card } from '@sofarsounds/maestro'
```

After adding the import you can use it simply like this
```html
<Card>
  <Card.Image url="your-image-url.jpg" />
  <Card.Content>
    <Card.Title>Sofar UIKit is lit!</Card.Title>
    <Card.Preview>
      A preview text for this card
    </Card.Preview>
    <Card.Footer>
      Any actions, or other elements for the footer
    </Card.Footer>
  </Card.Content>
</Card>
```

## Card Props
Table below contains all types of props available in the Card component  

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | Children elements (Card. elements)
| inverted      | `Boolean`    |                 | Whether this card is inverted. Will make text white instead of black
| linkTo        | `string`     |                 | When provided, this Card will be wrapped in a `Link` element and point to the url provided
| data-qaid     | `string`     |                 | Optional prop for testing purposes

## Card.Image Props
Table below contains all types of props available in the `Card.Image` component  

| Name          | Type     | Default         | Description                      |
| :------------ | :-----   | :-------------- | :------------------------------- |
| **url**       | `string` |                 | The image URL for the image to be displayed

## Card.Content Props
Table below contains all types of props available in the `Card.Content` component  

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | All content displayed in the content area

## Card.Title Props
Table below contains all types of props available in the `Card.Title` component  

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | Content displayed in the title

## Card.Preview Props
Table below contains all types of props available in the `Card.Preview` component  

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | Content displayed in the preview

## Card.FooterProps
Table below contains all types of props available in the `Card.Footer` component  

| Name          | Type         | Default         | Description                      |
| :------------ | :-----       | :-------------- | :------------------------------- |
| **children**  | `React.Node` |                 | Content displayed in the footer
