import type { Meta, StoryObj } from "@storybook/react";
import { generateColorElement } from "../../../utils/combination";
import RectangleColor from "./Rectangle";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Theme/Preview/Color/Rectangle",
  component: RectangleColor,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof RectangleColor>;

export default meta;
type Story = StoryObj<typeof meta>;

const mainColor = "#b4f8c8";
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    element: generateColorElement(mainColor),
  },
};
