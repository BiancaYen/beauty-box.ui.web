import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { PlayIcon } from '@/components/icons';

const meta: Meta<typeof PlayIcon> = {
    title: 'Components/Icons/Play Icon',
    component: PlayIcon,
};

export default meta;

type Story = StoryObj<typeof PlayIcon>;

export const Primary: Story = {
    args: {
        fill: 'var(--color-primaryDefault)',
    },
};
