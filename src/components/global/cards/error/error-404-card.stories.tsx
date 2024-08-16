import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Error404Card } from '@/components/global/cards/error';

const meta: Meta<typeof Error404Card> = {
    title: 'Components/Cards/Error Card',
    component: Error404Card,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof Error404Card>;

export const Error404: Story = {
    args: {
        backgroundImageSrc: '/images/storybook/error-bg.png',
        buttonCopy: 'Go Home',
        copy: "<span>Something didn't quite click.</span> <span>Please tap ‘Go Home’.</span>",
        heading: 'Oops!',
        // eslint-disable-next-line no-alert
        onClick: () => alert('button pressed'),
    },
};
