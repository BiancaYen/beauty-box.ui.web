import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { BookmarkCircleIcon } from '@/components/icons';

const meta: Meta<typeof BookmarkCircleIcon> = {
    title: 'Components/Icons/Bookmark Circle Icon',
    component: BookmarkCircleIcon,
};

export default meta;

type Story = StoryObj<typeof BookmarkCircleIcon>;

export const Primary: Story = {};
