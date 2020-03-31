# preact-styled-components

This is a fork from [stereobooster](https://github.com/stereobooster)'s [unstyled-components](https://github.com/stereobooster/unstyled-components) as I wish I could have found it adapted for [preact](https://github.com/preactjs/preact).

<img src="https://github.com/stereobooster/unstyled-components/blob/master/unstyled-components.png?raw=true" width="100" height="100" />

This is not styled-components.

## Installation

`npm i preact-styled-components`

`yarn add preact-styled-components`

## Example

```js
import { h } from "preact";
import isPropValid from "@emotion/is-prop-valid";
import { styled, ThemeProvider } from "preact-styled-components";

const Title = styled("h1", {
  shouldForwardProp: prop => isPropValid(prop) && prop !== "color"
})(props => ({
  color: "hotpink",
  background: props.theme.background
}));

export const StyledTest = () => (
  <ThemeProvider theme={{ background: "#000" }}>
    <Title color="lightgreen">This is lightgreen.</Title>
  </ThemeProvider>
);
```

## Why?

...
