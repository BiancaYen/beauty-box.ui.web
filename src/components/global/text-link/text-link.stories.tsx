import type { Meta, StoryObj } from '@storybook/react';

// Components
import { TextLink } from '@/components/global/text-link';

const meta: Meta<typeof TextLink> = {
    title: 'Components/TextLink',
    component: TextLink,
};

export default meta;

type Story = StoryObj<typeof TextLink>;

export const Primary: Story = {
    args: {
        children: 'Explore',
        href: '/',
    },
};
