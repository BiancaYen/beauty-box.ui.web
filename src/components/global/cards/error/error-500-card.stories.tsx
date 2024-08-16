import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Error500Card } from '@/components/global/cards/error';

const meta: Meta<typeof Error500Card> = {
    title: 'Components/Cards/Error Card',
    component: Error500Card,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof Error500Card>;

export const Error500: Story = {
    args: {
        backgroundImageSrc: '/images/storybook/error-bg.png',
        buttonCopy: 'Try Again',
        copy: "<span>Something didn't quite click.</span> <span>Try again?</span>",
        heading: 'Oops!',
        // eslint-disable-next-line no-alert
        onClick: () => alert('button pressed'),
    },
} satisfies Story;
