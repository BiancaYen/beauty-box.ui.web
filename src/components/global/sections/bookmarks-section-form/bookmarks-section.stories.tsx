import type { Meta, StoryObj } from '@storybook/react';

// Context
import { SearchContextProvider } from '@/components/providers/search-provider';

// Components
import { BookmarksSection, BookmarksSectionProps } from '@/components/global/sections/bookmarks-section-form/bookmarks-section';
import { ContentCardWithProfileAvatarProps } from '../../cards/content/content-card-with-profile-avatar';

const meta: Meta<typeof BookmarksSection> = {
    title: 'Components/Sections/Bookmarks Section',
    component: BookmarksSection,
} satisfies Meta<typeof BookmarksSection>;

export default meta;

type Story = StoryObj<typeof BookmarksSection>;

const cardProps: ContentCardWithProfileAvatarProps = {
    backgroundImage: {
        alt: 'Lesson Thumbnail',
        src: '/images/storybook/test-thumbnail.jpg',
    },
    category: 'Fashion Design',
    coach: 'Tshepo \'Master Jean Maker\'',
    coachId: '2',
    coachImage: {
        alt: 'Profile Image of Tshepo \'Master Jean Maker\'',
        src: '/images/storybook/profile-tshepo-jeans.jpg',
    },
    coachLink: '/coach/1',
    courseName: 'Designing Your Own Story',
    id: '1',
    isBookmarkActive: true,
    lessonCount: 10,
    link: '/class/1',
    type: 'course',
};

const data: BookmarksSectionProps = {
    heading: 'Bookmarked',
    tabPanes: [
        {
            index: 1,
            tab: 'Class',
            cards: [
                { ...cardProps, id: '1', courseName: 'Designing Your Own Story: The Big Picture' },
                { ...cardProps, id: '2', courseName: 'Designing Your Own Story: Getting Started' },
                { ...cardProps, id: '3', courseName: 'Designing Your Own Story: Deep Dive' },
                { ...cardProps, id: '4', courseName: 'Designing Your Own Story: Mastery' },
                { ...cardProps, id: '5', courseName: 'Designing Your Own Story: Research' },
                { ...cardProps, id: '8', courseName: 'Designing Your Own Story: Next Steps' },
            ],
        },
        {
            index: 2,
            tab: 'Single Lesson',
            cards: [
                { ...cardProps, id: '9', type: 'lesson', lessonName: 'Episode 01' },
                { ...cardProps, id: '10', type: 'lesson', lessonName: 'Episode 02' },
                { ...cardProps, id: '11', type: 'lesson', lessonName: 'Episode 03' },
                { ...cardProps, id: '12', type: 'lesson', lessonName: 'Episode 04' },
                { ...cardProps, id: '13', type: 'lesson', lessonName: 'Episode 05' },
                { ...cardProps, id: '14', type: 'lesson', lessonName: 'Episode 06' },
                { ...cardProps, id: '15', type: 'lesson', lessonName: 'Episode 07' },
                { ...cardProps, id: '16', type: 'lesson', lessonName: 'Episode 08' },
            ],
        },
    ],
};

export const Primary: Story = {
    args: data,
    decorators: [
        (Story) => (
            <SearchContextProvider>
                <Story />
            </SearchContextProvider>
        ),
    ],
} satisfies Story;
