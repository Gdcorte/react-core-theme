import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";

import { bundleBaseThemes } from "../src";

let allThemes = bundleBaseThemes()

let darkThemes = Object.keys(allThemes.dark.colors).map((value)=>{
  return {
    presets: allThemes.dark.presets,
    fonts: allThemes.dark.fonts,
    background: allThemes.dark.background,
    alerts: allThemes.dark.alerts,
    colors: allThemes.dark.colors[value],
    typeName: 'Dark',
    colorName: value,
    name: `Dark-${value}`,
  }

})

let lightThemes = Object.keys(allThemes.light.colors).map((value)=>{
  return {
    presets: allThemes.light.presets,
    fonts: allThemes.light.fonts,
    background: allThemes.light.background,
    alerts: allThemes.light.alerts,
    colors: allThemes.light.colors[value],
    typeName: 'Light',
    colorName: value,
    name: `Light-${value}`,
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