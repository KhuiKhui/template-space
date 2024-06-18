import type { Meta, StoryObj } from "@storybook/react";

import Header from "@/components/Header";

export default {
  title: "Header",
  component: Header,
};

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
