import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { ClockIcon } from '@/components/icons';

const meta: Meta<typeof ClockIcon> = {
    title: 'Components/Icons/Clock Icon',
    component: ClockIcon,
};

export default meta;

type Story = StoryObj<typeof ClockIcon>;

export const Primary: Story = {
    args: {
        fill: 'var(--color-primaryDefault)',
    },
};
