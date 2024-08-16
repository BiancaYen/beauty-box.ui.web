import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { HeaderMenuIcon } from '@/components/icons';

const meta: Meta<typeof HeaderMenuIcon> = {
    title: 'Components/Icons/Header Menu Icon',
    component: HeaderMenuIcon,
};

export default meta;

type Story = StoryObj<typeof HeaderMenuIcon>;

export const Primary: Story = {};
