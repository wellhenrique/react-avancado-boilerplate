import { Meta, Story } from "@storybook/react/types-6-0";
import { withKnobs } from "@storybook/addon-knobs";
import Main from ".";

export default {
  title: "Main",
  component: Main,
  decorators: [withKnobs]
} as Meta;

export const Basic: Story = () => <Main />;
