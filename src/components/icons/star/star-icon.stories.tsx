import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { StarIcon } from '@/components/icons';

const meta: Meta<typeof StarIcon> = {
    title: 'Components/Icons/Star Icon',
    component: StarIcon,
};

export default meta;

type Story = StoryObj<typeof StarIcon>;

export const Primary: Story = {};
