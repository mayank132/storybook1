// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/nextjs'
// import Button from "./components/Button";


const config: StorybookConfig = {
  // Required
  framework: '@storybook/nextjs',
  stories: ['./components/**/*.stories.@(js|jsx|ts|tsx)'],
  // Optional
  addons: ['@storybook/addon-essentials', "@storybook/addon-controls", {
    name: '@storybook/addon-styling',
    options: {
      // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
      // For more details on this addon's options.
      postCss: true,
    },
  },],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;