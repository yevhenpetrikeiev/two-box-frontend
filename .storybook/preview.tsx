import type { Preview } from '@storybook/nextjs-vite';
import '../app/globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Story />
        </AppRouterCacheProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
