import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { CircleSquiggleCheckIcon } from '@/components/icons';

const meta: Meta<typeof CircleSquiggleCheckIcon> = {
    title: 'Components/Icons/Circle Squiggle Check Icon',
    component: CircleSquiggleCheckIcon,
};

export default meta;

type Story = StoryObj<typeof CircleSquiggleCheckIcon>;

export const Primary: Story = {};
