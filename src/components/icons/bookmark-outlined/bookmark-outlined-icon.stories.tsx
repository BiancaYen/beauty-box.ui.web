import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { BookmarkOutlinedIcon } from '@/components/icons';

const meta: Meta<typeof BookmarkOutlinedIcon> = {
    title: 'Components/Icons/Bookmark Outlined Icon',
    component: BookmarkOutlinedIcon,
};

export default meta;

type Story = StoryObj<typeof BookmarkOutlinedIcon>;

export const Primary: Story = {
    args: {
        fill: 'var(--color-primaryDefault)',
    },
};
