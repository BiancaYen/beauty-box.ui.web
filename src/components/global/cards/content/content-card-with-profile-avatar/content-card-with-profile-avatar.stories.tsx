'use client';

import type { Meta, StoryObj } from '@storybook/react';

// Components
import {
    ContentCardWithProfileAvatar,
    ContentCardWithProfileAvatarProps,
} from '@/components/global/cards/content/content-card-with-profile-avatar';

// Data
const data: Omit<ContentCardWithProfileAvatarProps, 'type'> = {
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
    id: '1',
};

const dataCourse: Pick<ContentCardWithProfileAvatarProps, 'courseName' | 'lessonCount' | 'link' | 'type'> = {
    courseName: 'Designing Your Own Story',
    lessonCount: 10,
    link: '/course',
    type: 'course',
};

const dataLesson: Pick<ContentCardWithProfileAvatarProps, 'lessonName' | 'lessonTotalTime' | 'link' | 'type'> = {
    lessonName: 'EP 2: The Stories We Tell',
    lessonTotalTime: '10:00',
    link: '/lesson',
    type: 'lesson',
};

const meta: Meta<typeof ContentCardWithProfileAvatar> = {
    title: 'Components/Cards/Content/Content Card With Profile Avatar',
    component: ContentCardWithProfileAvatar,
};

type Story = StoryObj<typeof ContentCardWithProfileAvatar>;

export const Course: Story = {
    args: {
        ...data,
        ...dataCourse,
    },
};

export const CourseWithBookmark: Story = {
    args: {
        ...data,
        ...dataCourse,
        isBookmarkActive: true,
    },
};

export const Lesson: Story = {
    args: {
        ...data,
        ...dataLesson,
    },
};

export const LessonCompleted: Story = {
    args: {
        ...data,
        ...dataLesson,
        isCompleted: true,
        progress: 100,
    },
};

export const LessonProgress: Story = {
    args: {
        ...data,
        ...dataLesson,
        isCompleted: false,
        progress: 80,
    },
};

export const LessonWithBookmark: Story = {
    args: {
        ...data,
        ...dataLesson,
        isBookmarkActive: true,
    },
};

export default meta;
