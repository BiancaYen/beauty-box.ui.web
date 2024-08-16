import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { CheckOutlinedIcon } from '@/components/icons';

const meta: Meta<typeof CheckOutlinedIcon> = {
    title: 'Components/Icons/Check Outlined Icon',
    component: CheckOutlinedIcon,
};

export default meta;

type Story = StoryObj<typeof CheckOutlinedIcon>;

export const Primary: Story = {};
