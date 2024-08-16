import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { CaretLeftTallIcon } from '@/components/icons';

const meta: Meta<typeof CaretLeftTallIcon> = {
    title: 'Components/Icons/Caret Left Tall Icon',
    component: CaretLeftTallIcon,
};

export default meta;

type Story = StoryObj<typeof CaretLeftTallIcon>;

export const Primary: Story = {
    args: {
        fill: 'var(--color-primaryDefault)',
    },
};
