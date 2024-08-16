import type { Meta, StoryObj } from '@storybook/react';

// Components
import { VideoPlaylistRow } from '@/components/global/video/video-playlist-row/video-playlist-row';

const meta: Meta<typeof VideoPlaylistRow> = {
    title: 'Components/Video/Video Playlist Row',
    component: VideoPlaylistRow,
};

export default meta;

type Story = StoryObj<typeof VideoPlaylistRow>;

export const Primary: Story = {
    args: {
        backgroundImage: {
            alt: 'Lesson Thumbnail',
            src: '/images/storybook/test-thumbnail.jpg',
        },
        copy: 'Sub Text here',
        duration: '11:00',
        heading: 'Header',
        href: 'http://',
        isActive: true,
    },
};
