import type { Meta, StoryObj } from "@storybook/react";
import { colorCombinationVariants } from "../../interfaces";
import ThemePallete from "./Pallete";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Theme/Preview/Pallete",
  component: ThemePallete,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    combination: {
      options: colorCombinationVariants,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof ThemePallete>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    colors: {
      base: "#b4f8c8",
      background: "#2d2d2d",
    },
    name: "green",
    theme: "dark",
    combination: "analogous",
  },
};
