# withFlex

The `withFlex` util allows developers to add `flex` properties as React prop to any component
that this util has been added to.

To implement `withFlex` in a component
```js
import { withFlex } from '@sofarsounds/maestro'
```

After adding the import you can use `withFlex` like this
```js
const FlexDiv = styled.div`
  ${withFlex};
`
```
```html
<FlexDiv flexDirection="row" justifyContent="center">
  I am well flexed!
</FlexDiv>
```

## Props
Table below contains all types of props available in the withFlex util

| Name           | Type                      | Default         | Description                      |
| :------------  | :------------------------ | :-------------- | :------------------------------- |
| flexDirection  | `String`                  |                 | Set the flex-direction prop
| flexWrap       | `String`                  |                 | Set the flex-wrap prop
| flexFlow       | `String`                  |                 | Set the flex-flow prop
| justifyContent | `String`                  |                 | Set the justify-content prop
| alignItems     | `String`                  |                 | Set the align-items prop
| alignContent   | `String`                  |                 | Set the align-content prop



