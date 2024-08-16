import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { WarningIcon } from '@/components/icons';

const meta: Meta<typeof WarningIcon> = {
    title: 'Components/Icons/Warning Icon',
    component: WarningIcon,
};

export default meta;

type Story = StoryObj<typeof WarningIcon>;

export const Primary: Story = {};
