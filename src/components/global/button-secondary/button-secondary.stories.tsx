import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ButtonSecondary } from '@/components/global/button-secondary';

// Icons
import { BookmarkIcon } from '@/components/icons';

const meta: Meta<typeof ButtonSecondary> = {
    argTypes: { onClick: { action: 'clicked' } },
    component: ButtonSecondary,
    title: 'Components/Button Secondary',
};

export default meta;

type Story = StoryObj<typeof ButtonSecondary>;

export const Primary: Story = {
    args: {
        children: 'Button Label',
    },
};

export const WithIcon: Story = {
    args: {
        children: 'Button Label',
        icon: BookmarkIcon,
    },
};

