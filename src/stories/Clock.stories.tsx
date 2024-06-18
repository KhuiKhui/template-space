import type { Meta, StoryObj } from "@storybook/react";

import Clock from "@/components/Clock";

export default {
  title: "Clock",
  component: Clock,
};

type Story = StoryObj<typeof Clock>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
