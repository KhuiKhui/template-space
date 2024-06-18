import type { Preview } from "@storybook/react";
import "../src/app/globals.css"; // replace with the name of your tailwind css file
import {
  withThemeByClassName,
  withThemeByDataAttribute,
} from "@storybook/addon-themes";

/* snipped for brevity */

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  }),
];
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
