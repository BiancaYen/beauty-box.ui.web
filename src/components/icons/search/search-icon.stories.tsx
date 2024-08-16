import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { SearchIcon } from '@/components/icons';

const meta: Meta<typeof SearchIcon> = {
    title: 'Components/Icons/Search Icon',
    component: SearchIcon,
};

export default meta;

type Story = StoryObj<typeof SearchIcon>;

export const Primary: Story = {};
