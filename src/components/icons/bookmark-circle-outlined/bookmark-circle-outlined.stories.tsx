import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { BookmarkCircleOutlinedIcon } from '@/components/icons';

const meta: Meta<typeof BookmarkCircleOutlinedIcon> = {
    title: 'Components/Icons/Bookmark Circle Outlined Icon',
    component: BookmarkCircleOutlinedIcon,
};

export default meta;

type Story = StoryObj<typeof BookmarkCircleOutlinedIcon>;

export const Primary: Story = {
    args: {
        fill: 'var(--color-primaryDefault)',
    },
};
