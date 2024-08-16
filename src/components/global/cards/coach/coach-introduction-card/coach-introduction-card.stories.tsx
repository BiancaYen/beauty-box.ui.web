'use client';

import type { Meta, StoryObj } from '@storybook/react';

// Components
import {
    CoachIntroductionCard,
    CoachIntroductionCardProps,
} from '@/components/global/cards/coach/coach-introduction-card';

const coachData: CoachIntroductionCardProps = {
    backgroundImage: {
        alt: 'Ryan Sandes',
        src: './images/storybook/test-coach.png',
    },
    backgroundImageHover: {
        alt: 'Ryan Sandes',
        src: './images/storybook/test-coach-hover.png',
    },
    book: 'Masterbook',
    categoryColor: '#006987',
    categoryId: 1,
    coach: 'Ryan Sandes',
    courseTotalTime: 160,
    description: `Discover how to design your trail of life; 
    how to run for purpose and pleasure; how to back 
    yourself, push yourself and ultimately steer your 
    sights towards the one and only summit that’ll set 
    your soul on fire.`,
    id: 'ryan-sandes',
    lessonCount: 12,
    link: '/coaches',
    redirectCopy: 'View Coach',
    subheading: 'Mastering your own Trail',
    subcategory: 'Sports',
};

const meta: Meta<typeof CoachIntroductionCard> = {
    args: { ...coachData },
    title: 'Components/Cards/Coach/Coach Introduction Card',
    component: CoachIntroductionCard,
};

export default meta;

type Story = StoryObj<typeof CoachIntroductionCard>;

export const Primary: Story = {};

export const WithBookmark: Story = {
    args: {
        isBookmarkActive: true,
    },
};
