import type { Meta, StoryObj } from "@storybook/react";

import Footer from "@/components/Footer";

export default {
  title: "Footer",
  component: Footer,
};

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
