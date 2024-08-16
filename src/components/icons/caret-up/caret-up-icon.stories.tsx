import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { CaretUpIcon } from '@/components/icons';

const meta: Meta<typeof CaretUpIcon> = {
    title: 'Components/Icons/Caret Up Icon',
    component: CaretUpIcon,
};

export default meta;

type Story = StoryObj<typeof CaretUpIcon>;

export const Primary: Story = {};
