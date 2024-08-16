import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { CaretRightTallIcon } from '@/components/icons';

const meta: Meta<typeof CaretRightTallIcon> = {
    title: 'Components/Icons/Caret Right Tall Icon',
    component: CaretRightTallIcon,
};

export default meta;

type Story = StoryObj<typeof CaretRightTallIcon>;

export const Primary: Story = {
    args: {
        fill: 'var(--color-primaryDefault)',
    },
};
