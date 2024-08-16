import type { Meta, StoryObj } from '@storybook/react';

// Components
import { LessonPlayerSection } from '@/components/global/sections/lesson-player-section';

// Data
const playlistItemNotActive = {
    backgroundImage: {
        alt: 'Lesson Thumbnail',
        src: '/images/storybook/test-thumbnail.jpg',
    },
    copy: 'Sub Text here',
    duration: '11:00',
    heading: 'Header',
    id: '1',
    isActive: false,
};

const data = {
    book: 'Masterbook',
    bookmarkCopy: {
        active: 'Undo Bookmark',
        inactive: 'Add Bookmark',
    },
    coach: "Tshepo 'Master Jean Maker'",
    completeCopy: {
        completed: 'Undo Watched',
        incomplete: 'Mark as Watched',
    },
    courseName: 'Designing your own story',
    isBookmarkActive: false,
    isCompleted: false,
    lessonDescription: 'Discover the meaning behind Tshepo’s logo, and the women who shaped him into a local icon with global designs.',
    lessonDownloadLink: 'http',
    lessonId: '1',
    lessonName: 'EP 2: The Stories We Tell',
    playlist: [
        playlistItemNotActive,
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
        playlistItemNotActive,
        playlistItemNotActive,
        playlistItemNotActive,
        playlistItemNotActive,
        playlistItemNotActive,
        playlistItemNotActive,
    ],
    thumbnailImage: {
        alt: 'Ep Thumbnail',
        src: '/images/storybook/test-thumbnail.jpg',
    },
    videoSrc: 'https://760020dac27e20d936b2-a6f64104c6f909ec2d398b11ad91465d.ssl.cf5.rackcdn.com/2023/Video/Life%20Skills/Why%20Does%20Video%20Chatting%20Cause%20Fatigue.mp4',
};

const meta: Meta<typeof LessonPlayerSection> = {
    title: 'Components/Sections/Lesson Player Section',
    component: LessonPlayerSection,
    parameters: {
        layout: 'fullscreen',
    },
};

type Story = StoryObj<typeof LessonPlayerSection>;

export const Primary: Story = {
    args: {
        ...data,
    },
};

export const BookmarkedAndCompleted: Story = {
    args: {
        ...data,
        isBookmarkActive: true,
        isCompleted: true,
    },
};

export default meta;
