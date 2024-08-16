import type { Preview } from '@storybook/react';

// Fonts
import { poppins } from '../src/components/font';

// Styles
import '../src/app/globals.css';

const preview: Preview = {
  decorators: [
    (Story) => (
        <div className={`${poppins.variable} font-primary`}>
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <Story />
        </div>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F8F8F8',
        },
        {
          name: 'grey',
          value: '#EEEEEE',
        },
        {
          name: 'dark',
          value: '#333333',
        },
        {
          name: 'black',
          value: '#000000',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      // Can not type - open issue: https://github.com/storybookjs/storybook/issues/22779
      // @ts-ignore
      storySort: (a, b) =>
          a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
};

export default preview;
