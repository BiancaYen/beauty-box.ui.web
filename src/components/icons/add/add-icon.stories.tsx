import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { AddIcon } from '@/components/icons';

const meta: Meta<typeof AddIcon> = {
    title: 'Components/Icons/Add Icon',
    component: AddIcon,
};

export default meta;

type Story = StoryObj<typeof AddIcon>;

export const Primary: Story = {};
