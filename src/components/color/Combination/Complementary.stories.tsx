import type { Meta, StoryObj } from "@storybook/react";
import { colorElementDisplayShapes } from "../Element/interface";
import Complementary from "./Complementary";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Theme/Preview/Combination/Complementary",
  component: Complementary,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    shape: {
      name: "shape",
      type: { name: "string", required: false },
      defaultValue: "rectangle",
      options: colorElementDisplayShapes,
      mapping: {
        rectangle: "rectangle",
        ball: "ball",
      },
      control: {
        type: "select",
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Complementary>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    base: "#b4f8c8",
  },
};
