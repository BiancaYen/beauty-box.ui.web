import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ContentCardWithProfileAvatarProps } from '@/components/global/cards/content/content-card-with-profile-avatar';
import { ContentSection, ContentSectionProps } from '@/components/global/sections/content-section';

// Data
const dataItem: Omit<ContentCardWithProfileAvatarProps, 'id'> = {
    backgroundImage: {
        alt: 'Lesson Thumbnail',
        src: '/images/storybook/test-thumbnail.jpg',
    },
    category: 'Fashion Design',
    coach: 'Tshepo \'Master Jean Maker\'',
    coachId: '1',
    coachImage: {
        alt: 'Profile Image of Tshepo \'Master Jean Maker\'',
        src: '/images/storybook/profile-tshepo-jeans.jpg',
    },
    coachLink: '/coach',
    link: '/lesson',
    type: 'lesson',
};

const dataItemBookmarkIsActive: Omit<ContentCardWithProfileAvatarProps, 'id'> = {
    ...dataItem,
    isBookmarkActive: true,
};

const dataItemCourse: Pick<ContentCardWithProfileAvatarProps, 'courseName' | 'lessonCount' | 'type'> = {
    courseName: 'The Ability to See Beyond the Lens',
    lessonCount: 10,
    type: 'course',
};

const dataItemLesson: Pick<ContentCardWithProfileAvatarProps, 'lessonName' | 'lessonTotalTime' | 'progress' | 'type'> = {
    lessonName: 'EP 2: The Stories We Tell',
    lessonTotalTime: '10:00',
    progress: 80,
    type: 'lesson',
};

const dataCourseItems: ContentCardWithProfileAvatarProps[] = [
    {
        ...dataItemBookmarkIsActive,
        ...dataItemCourse,
        id: '1',
        link: '/class',
    },
    {
        ...dataItemBookmarkIsActive,
        ...dataItemCourse,
        id: '2',
        link: '/class',
    },
    {
        ...dataItemBookmarkIsActive,
        ...dataItemCourse,
        id: '3',
        link: '/class',
    },
    {
        ...dataItemBookmarkIsActive,
        ...dataItemCourse,
        id: '4',
        link: '/class',
    },
    {
        ...dataItemBookmarkIsActive,
        ...dataItemCourse,
        id: '5',
        link: '/class',
    },
    {
        ...dataItemBookmarkIsActive,
        ...dataItemCourse,
        id: '6',
        link: '/class',
    },
];

// Props
const propsBookmarkedSection: Omit<ContentSectionProps, 'data'> = {
    action: {
        copy: 'See More',
        link: '/bookmarks',
    },
    hasMoreCard: true,
    heading: 'Bookmarked',
    noData: {
        copy: '<strong>Save videos</strong> so you can them watch later! Clicking on the bookmark icon on the videos'
            + ' & we will save them here <strong>on the Home tab</strong>!',
        imageAlt: 'Master Stream logo with an arrow indicating where the bookmark icon is',
        imageSrc: '/images/placeholders/bookmark-placeholder.png',
        link: '/discover',
    },
};

const propsContinueWatching: Omit<ContentSectionProps, 'data'> = {
    heading: 'Continue Watching',
    noData: {
        copy: 'Check out the <strong>Discover</strong> tab and jump in the world of mastering new skills!',
        imageAlt: 'Representation of the navigation header with an arrow indicating where the \'Disover\' link is',
        imageSrc: '/images/placeholders/discover-placeholder.png',
        link: '/discover',
    },
};

const propsMostWatchedClasses: Omit<ContentSectionProps, 'data'> = {
    heading: 'Most Watched Classes',
};

const propsRecommendedVideos: Omit<ContentSectionProps, 'data'> = {
    heading: 'Recommended Videos',
};

// Storybook
const meta: Meta<typeof ContentSection> = {
    title: 'Components/Sections/Content Section',
    component: ContentSection,
};

type Story = StoryObj<typeof ContentSection>;

export const BookmarkedData: Story = {
    args: {
        ...propsBookmarkedSection,
        data: [
            {
                ...dataItemBookmarkIsActive,
                ...dataItemLesson,
                id: '1',
                link: '/lesson',
            },
            {
                ...dataItemBookmarkIsActive,
                ...dataItemCourse,
                id: '2',
                link: '/class',
            },
            {
                ...dataItemBookmarkIsActive,
                ...dataItemCourse,
                id: '3',
                link: '/class',
            },
            {
                ...dataItemBookmarkIsActive,
                ...dataItemLesson,
                id: '4',
                link: '/lesson',
                progress: 50,
            },
            {
                ...dataItemBookmarkIsActive,
                ...dataItemLesson,
                id: '5',
                link: '/lesson',
                progress: 60,
            },
            {
                ...dataItemBookmarkIsActive,
                ...dataItemCourse,
                id: '6',
                link: '/class',
            },
        ],
    },
};

export const BookmarkedNoData: Story = {
    args: {
        ...propsBookmarkedSection,
        data: [],
    },
};

export const ContinueWatchingData: Story = {
    args: {
        ...propsContinueWatching,
        data: [
            {
                ...dataItem,
                ...dataItemLesson,
                id: '1',
                link: '/lesson',
                progress: 80,
            },
            {
                ...dataItem,
                ...dataItemLesson,
                id: '2',
                link: '/lesson',
                progress: 10,
            },
            {
                ...dataItem,
                ...dataItemLesson,
                id: '3',
                link: '/lesson',
                progress: 20,
            },
            {
                ...dataItem,
                ...dataItemLesson,
                id: '4',
                link: '/lesson',
                progress: 50,
            },
            {
                ...dataItem,
                ...dataItemLesson,
                id: '5',
                link: '/lesson',
                progress: 60,
            },
            {
                ...dataItem,
                ...dataItemLesson,
                id: '6',
                link: '/lesson',
                progress: 15,
            },
        ],
    },
};

export const ContinueWatchingNoData: Story = {
    args: {
        ...propsContinueWatching,
        data: [],
    },
};

export const MostWatchedClasses: Story = {
    args: {
        ...propsMostWatchedClasses,
        data: dataCourseItems,
    },
};

export const RecommendedVideos: Story = {
    args: {
        ...propsRecommendedVideos,
        data: dataCourseItems,
    },
};

export default meta;
