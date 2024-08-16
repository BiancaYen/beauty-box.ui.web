import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { CloseIcon } from '@/components/icons';

const meta: Meta<typeof CloseIcon> = {
    title: 'Components/Icons/Close Icon',
    component: CloseIcon,
};

export default meta;

type Story = StoryObj<typeof CloseIcon>;

export const Primary: Story = {};
