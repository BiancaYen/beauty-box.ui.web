import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { CaretRightIcon } from '@/components/icons';

const meta: Meta<typeof CaretRightIcon> = {
    title: 'Components/Icons/Caret Right Short',
    component: CaretRightIcon,
};

export default meta;

type Story = StoryObj<typeof CaretRightIcon>;

export const Primary: Story = {};
