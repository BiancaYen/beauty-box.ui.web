import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { CircleCheckIcon } from '@/components/icons';

const meta: Meta<typeof CircleCheckIcon> = {
    title: 'Components/Icons/Circle Check Icon',
    component: CircleCheckIcon,
};

export default meta;

type Story = StoryObj<typeof CircleCheckIcon>;

export const Primary: Story = {};
