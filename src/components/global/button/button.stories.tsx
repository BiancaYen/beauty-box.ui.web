import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Button } from '@/components/global/button';

// Icons
import { CaretRightIcon } from '@/components/icons';

const meta: Meta<typeof Button> = {
    argTypes: { onClick: { action: 'clicked' } },
    component: Button,
    title: 'Components/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Button Label',
    },
};

export const WithIcon: Story = {
    args: {
        children: 'Button Label',
        icon: CaretRightIcon,
    },
};

