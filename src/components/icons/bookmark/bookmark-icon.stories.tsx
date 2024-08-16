import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { BookmarkIcon } from '@/components/icons';

const meta: Meta<typeof BookmarkIcon> = {
    title: 'Components/Icons/Bookmark Icon',
    component: BookmarkIcon,
};

export default meta;

type Story = StoryObj<typeof BookmarkIcon>;

export const Primary: Story = {};
