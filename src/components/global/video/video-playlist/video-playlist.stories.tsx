import type { Meta, StoryObj } from '@storybook/react';

// Components
import { VideoPlaylist } from '@/components/global/video/video-playlist';

const meta: Meta<typeof VideoPlaylist> = {
    title: 'Components/Video/Video Playlist',
    component: VideoPlaylist,
};

export default meta;

type Story = StoryObj<typeof VideoPlaylist>;

export const Primary: Story = {
    args: {
        data: [
            {
                backgroundImage: {
                    alt: 'Lesson Thumbnail',
                    src: '/images/storybook/test-thumbnail.jpg',
                },
                copy: 'Sub Text here',
                duration: '11:00',
                heading: 'Header',
                id: '1',
                isActive: false,
            },
            {
                backgroundImage: {
                    alt: 'Lesson Thumbnail',
                    src: '/images/storybook/test-thumbnail.jpg',
                },
                copy: 'Sub Text here',
                duration: '22:00',
                heading: 'Header',
                id: '3',
                isActive: true,
            },
            {
                backgroundImage: {
                    alt: 'Lesson Thumbnail',
                    src: '/images/storybook/test-thumbnail.jpg',
                },
                copy: 'Sub Text here',
                duration: '1:00',
                heading: 'Header',
                id: '2',
                isActive: false,
            },
            {
                backgroundImage: {
                    alt: 'Lesson Thumbnail',
                    src: '/images/storybook/test-thumbnail.jpg',
                },
                copy: 'Sub Text here',
                duration: '2:00',
                heading: 'Header',
                id: '4',
                isActive: false,
            },
            {
                backgroundImage: {
                    alt: 'Lesson Thumbnail',
                    src: '/images/storybook/test-thumbnail.jpg',
                },
                copy: 'Sub Text here',
                duration: '15:00',
                heading: 'Header',
                id: '5',
                isActive: false,
            },
        ],
    },
};
