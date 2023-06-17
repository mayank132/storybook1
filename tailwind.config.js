// tailwind.config.js

module.exports = {
    content: ['./.storybook/components/**/*.{js,jsx,ts,tsx}'],
    // Toggle dark-mode based on data-mode="dark"
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
      extend: {},
    },
    plugins: [],
  };