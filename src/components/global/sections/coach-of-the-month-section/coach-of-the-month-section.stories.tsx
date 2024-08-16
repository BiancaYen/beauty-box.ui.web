'use client';

import type { Meta, StoryObj } from '@storybook/react';

// Components
import { CoachOfTheMonthSection } from '@/components/global/sections/coach-of-the-month-section';

// Types
import { FeaturedCoachOfTheMonthCardProps } from '@/components/global/cards/featured/featured-coach-of-the-month-card';

// Data
const data: Omit<FeaturedCoachOfTheMonthCardProps, 'isBookmarkActive'> = {
    backgroundImage: {
        alt: 'Background',
        src: '/images/storybook/coach-of-the-month-background-mobile.png',
    },
    backgroundImageDesktop: {
        alt: 'Background',
        src: '/images/storybook/coach-of-the-month-background-desktop.png',
    },
    category: 'Sports',
    coach: 'Ryan Sandes',
    coachImage: {
        alt: 'Ryan Sandes',
        src: '/images/storybook/coach-of-the-month-coach-mobile.png',
    },
    coachImageDesktop: {
        alt: 'Ryan Sandes',
        src: '/images/storybook/coach-of-the-month-coach-desktop.png',
    },
    coachNameColor: '#ACCAE0',
    description: `An award-winning, elite ultra-marathon trail runner, Ryan Sandes has set and smashed 
                      records all over the world, claiming a plethora of titles as the first and fastest.
                      He’s the first to win all four of the 250km “Desert Races”, and to take first in an ultra-trail 
                      on all seven continents. Sandes knows exactly what it takes to overcome obstacles, run your race and, 
                      ultimately, master the trail.`,
    heading: 'Coach of the Month',
    id: 'ryan-sandes',
    link: '/coaches',
    linkCopy: 'Learn More',
    subheading: 'About your coach',
};

const meta: Meta<typeof CoachOfTheMonthSection> = {
    title: 'Components/Sections/Coach Of The Month Section',
    component: CoachOfTheMonthSection,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof CoachOfTheMonthSection>;

export const Primary: Story = {
    args: {
        ...data,
    },
};

export const WithBookmark: Story = {
    args: {
        ...data,
        isBookmarkActive: true,
    },
};
