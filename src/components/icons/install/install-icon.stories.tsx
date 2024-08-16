import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { InstallIcon } from '@/components/icons';

const meta: Meta<typeof InstallIcon> = {
    title: 'Components/Icons/Install Icon',
    component: InstallIcon,
};

export default meta;

type Story = StoryObj<typeof InstallIcon>;

export const Primary: Story = {
    args: {
        fill: 'var(--color-primaryDefault)',
    },
};
