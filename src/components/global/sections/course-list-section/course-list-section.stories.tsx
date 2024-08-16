import type { Meta, StoryObj } from '@storybook/react';

// Components
import { CourseItemProps, CourseListSection } from '@/components/global/sections/course-list-section';
import { LessonCardWithDescriptionProps } from '@/components/global/cards/content/lesson-card-with-description';

// Data
const data: Omit<CourseItemProps, 'data' | 'id'> = {
    action: {
        copy: 'See More',
        link: '/class',
    },
    heading: 'The Courage to speak',
};

const dataItem: Omit<LessonCardWithDescriptionProps, 'id'> = {
    backgroundImage: {
        alt: 'Lesson Thumbnail',
        src: '/images/storybook/test-thumbnail.jpg',
    },
    category: 'Fashion Design',
    isBookmarkActive: false,
    lessonDescription: 'Maps invites you to take your seat as he shares the story of his first-ever audition – and the defining moment that made him who he is today!',
    lessonName: 'Intro: The Audition',
    lessonTotalTime: '10:00',
    link: '/lesson',
    type: 'lesson',
};

const meta: Meta<typeof CourseListSection> = {
    title: 'Components/Sections/Course List Section',
    component: CourseListSection,
};

type Story = StoryObj<typeof CourseListSection>;

export const Data: Story = {
    args: {
        data: [
            {
                ...data,
                id: '1',
                data: [
                    {
                        ...dataItem,
                        id: '1',
                        isCompleted: true,
                    },
                    {
                        ...dataItem,
                        id: '2',
                        isCompleted: true,
                    },
                    {
                        ...dataItem,
                        id: '3',
                        isCompleted: true,
                    },
                    {
                        ...dataItem,
                        id: '4',
                        isCompleted: true,
                    },
                    {
                        ...dataItem,
                        id: '5',
                        progress: 50,
                    },
                ],
            },
            {
                ...data,
                id: '2',
                data: [
                    {
                        ...dataItem,
                        id: '1',
                    },
                    {
                        ...dataItem,
                        id: '2',
                    },
                    {
                        ...dataItem,
                        id: '3',
                    },
                    {
                        ...dataItem,
                        id: '4',
                    },
                    {
                        ...dataItem,
                        id: '5',
                    },
                ],
            },
        ],
    },
};

export default meta;
