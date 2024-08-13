# About this project

This package plays around the color theory and implements basic color combinations.
There are also methods to programatically tint, shade and create contrast between colors.

A base theming strategy is also defined. There are methods that will generate the theme with minimal configuration.
It is also posisble to customize many of the default color generation strategy in here.

## Local development

You can see what the package offers by running `pnpm install` and then `pnpm storybook`. This will start storybook on port 6006.

Storybook offers an overview of components defined in this package to enable the user to preview themes.
The main Theme component also allows exporting the currently generated theme.
Generated content is logged into the console (INFO level) and directly to the clipboard. THis can be fine-tuned for the user project.
