import type { Meta, StoryObj } from '@storybook/react';

// Components
import { PlaylistControls } from '@/components/global/playlist-controls';

const meta: Meta<typeof PlaylistControls> = {
    title: 'Components/PlaylistControls',
    component: PlaylistControls,
};

export default meta;

type Story = StoryObj<typeof PlaylistControls>;

export const Primary: Story = {
    args: {
        count: 12,
        isAutoplay: false,
    },
};
