import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { CheckIcon } from '@/components/icons';

const meta: Meta<typeof CheckIcon> = {
    title: 'Components/Icons/Check Icon',
    component: CheckIcon,
};

export default meta;

type Story = StoryObj<typeof CheckIcon>;

export const Primary: Story = {
    args: {
        fill: 'var(--color-primaryDefault)',
    },
};
