import type { Meta, StoryObj } from '@storybook/react';

// Components
import {
    LessonCardWithDescription,
    LessonCardWithDescriptionProps,
} from '@/components/global/cards/content/lesson-card-with-description';

// Data
const data: LessonCardWithDescriptionProps = {
    backgroundImage: {
        alt: 'Lesson Thumbnail',
        src: '/images/storybook/test-thumbnail.jpg',
    },
    category: 'Fashion Design',
    id: '1',
    lessonDescription: 'Maps invites you to take your seat as he shares the story of his first-ever audition – and the defining moment that made him who he is today!',
    lessonName: 'EP 2: The Stories We Tell',
    lessonTotalTime: '10:00',
    link: '/lesson',
    type: 'lesson',
};

const meta: Meta<typeof LessonCardWithDescription> = {
    title: 'Components/Cards/Content/Lesson Card With Description',
    component: LessonCardWithDescription,
};

type Story = StoryObj<typeof LessonCardWithDescription>;

export const Default: Story = {
    args: {
        ...data,
    },
};

export const Completed: Story = {
    args: {
        ...data,
        isCompleted: true,
        progress: 100,
    },
};

export const Progress: Story = {
    args: {
        ...data,
        isCompleted: false,
        progress: 80,
    },
};

export const WithBookmark: Story = {
    args: {
        ...data,
        isBookmarkActive: true,
        isCompleted: false,
        progress: 80,
    },
};

export default meta;
