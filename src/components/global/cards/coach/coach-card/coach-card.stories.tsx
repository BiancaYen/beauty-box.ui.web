'use client';

import type { Meta, StoryObj } from '@storybook/react';

// Components
import { CoachCard, CoachCardProps } from '@/components/global/cards/coach/coach-card';

// Data
const data: CoachCardProps = {
    backgroundImage: {
        alt: 'Ryan Sandes',
        src: './images/storybook/test-coach-2.png',
    },
    backgroundImageHover: {
        alt: 'Ryan Sandes',
        src: './images/storybook/test-coach-2-hover.png',
    },
    book: 'Masterbook',
    categoryColor: '#006987',
    coach: 'Ryan Sandes',
    courseTotalTime: 160,
    id: 'ryan-sandes',
    lessonCount: 12,
    link: '/coaches',
    redirectCopy: 'View Class',
    subcategory: 'Sports',
};

const meta: Meta<typeof CoachCard> = {
    title: 'Components/Cards/Coach/Coach Card',
    component: CoachCard,
};

export default meta;

type Story = StoryObj<typeof CoachCard>;

export const Primary: Story = {
    args: data,
};

export const WithBookmark: Story = {
    args: {
        isBookmarkActive: true,
        ...data,
    },
};

