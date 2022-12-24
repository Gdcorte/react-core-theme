import { ComponentMeta, ComponentStory } from "@storybook/react";

import { default as PalleteCreator } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Theme",
  component: PalleteCreator,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PalleteCreator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PalleteCreator> = (args) => (
  <PalleteCreator {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Pallete = Template.bind({});
Pallete.args = {};
