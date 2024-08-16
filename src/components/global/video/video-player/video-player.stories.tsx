import type { Meta, StoryObj } from '@storybook/react';

// Components
import { VideoPlayer } from '@/components/global/video/video-player';

const meta: Meta<typeof VideoPlayer> = {
    title: 'Components/Video/Video Player',
    component: VideoPlayer,
};

type Story = StoryObj<typeof VideoPlayer>;

export const Primary: Story = {
    render: () => (
        <div>
            <p>Responsive width does work, but due to bug with Storybook tailwind classes are not working here</p>
            <VideoPlayer
                className="w-[400px]"
                id="1"
                startWithControls
                thumbnailImage={{
                    alt: 'Thumbnail',
                    src: '/images/storybook/test-thumbnail.jpg',
                }}
                videoSrc="https://760020dac27e20d936b2-a6f64104c6f909ec2d398b11ad91465d.ssl.cf5.rackcdn.com/2023/Video/Life%20Skills/Why%20Does%20Video%20Chatting%20Cause%20Fatigue.mp4"
            />
            <p>Spacing test</p>
        </div>
    ),
};

export const Rounded: Story = {
    args: {
        hasRoundedCorners: true,
        id: '1',
        thumbnailImage: {
            alt: 'Thumbnail',
            src: '/images/storybook/test-thumbnail.jpg',
        },
        videoSrc: 'https://760020dac27e20d936b2-a6f64104c6f909ec2d398b11ad91465d.ssl.cf5.rackcdn.com/2023/Video/Life%20Skills/Why%20Does%20Video%20Chatting%20Cause%20Fatigue.mp4',
    },
};

export const Progress: Story = {
    args: {
        id: '1',
        progress: 0.7,
        startWithControls: true,
        thumbnailImage: {
            alt: 'Thumbnail',
            src: '/images/storybook/test-thumbnail.jpg',
        },
        videoSrc: 'https://760020dac27e20d936b2-a6f64104c6f909ec2d398b11ad91465d.ssl.cf5.rackcdn.com/2023/Video/Life%20Skills/Why%20Does%20Video%20Chatting%20Cause%20Fatigue.mp4',
    },
};

export default meta;
