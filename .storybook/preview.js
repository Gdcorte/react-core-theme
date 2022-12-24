import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";

import {
  bundleThemes
} from '../src';

let allThemes = bundleThemes()
let darkThemes = Object.values(allThemes.dark.themes).map((value)=>{
  return {
    presets: allThemes.dark.presets,
    theme: value,
    name: value.name,
  }

})

let lightThemes = Object.values(allThemes.light.themes).map((value)=>{
  return {
    presets: allThemes.light.presets,
    theme: value,
    name: value.name,
  }
})

const themes = [
  ...lightThemes,
  ...darkThemes,
];

addDecorator(withThemesProvider(themes), ThemeProvider);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}