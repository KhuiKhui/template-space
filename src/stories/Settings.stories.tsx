import type { Meta, StoryObj } from "@storybook/react";

import Settings from "@/components/Settings";

export default {
  title: "Settings",
  component: Settings,
};

type Story = StoryObj<typeof Settings>;

export const Default: Story = {
  args: {
    settingsClicked: true,
  },
};
