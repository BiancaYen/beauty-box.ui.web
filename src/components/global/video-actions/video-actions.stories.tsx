import type { Meta, StoryObj } from '@storybook/react';

// Components
import { VideoActions } from '@/components/global/video-actions';

const meta: Meta<typeof VideoActions> = {
    title: 'Components/Video/Video Actions',
    component: VideoActions,
};

export default meta;

type Story = StoryObj<typeof VideoActions>;

export const Primary: Story = {
    args: {
        book: 'Masterbook',
        bookmarkCopy: {
            active: 'Undo Bookmark',
            inactive: 'Add Bookmark',
        },
        completeCopy: {
            completed: 'Undo Watched',
            incomplete: 'Mark as Watched',
        },
        isBookmarkActive: true,
        isCompleted: true,
        lessonDownloadLink: 'http',
        onBookmarkClick: () => {},
        onCompletedClick: () => {},
    },
};
