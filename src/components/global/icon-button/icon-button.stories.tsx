import type { Meta, StoryObj } from '@storybook/react';

// Components
import { IconButton } from '@/components/global/icon-button';

const meta: Meta<typeof IconButton> = {
    title: 'Components/IconButton',
    component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
    args: {
        children: 'ss',
    },
};

