'use client';

import type { Meta, StoryObj } from '@storybook/react';

// Components
import { FeaturedHeroSection } from '@/components/global/sections/featured-hero-section';

// Types
import { FeaturedHeroCardProps } from '@/components/global/cards/featured/featured-hero-card';

// Data
const data: FeaturedHeroCardProps = {
    backgroundImage: {
        alt: 'Background Description',
        src: 'images/storybook/featured-hero-background.png',
    },
    backgroundImageDesktop: {
        alt: 'Background Description',
        src: 'images/storybook/featured-hero-background-desktop.png',
    },
    book: 'Masterbook',
    foregroundImage: {
        alt: 'Maps Maponyane',
        src: 'images/storybook/featured-coach.png',
    },
    foregroundImageDesktop: {
        alt: 'Maps Maponyane',
        src: 'images/storybook/featured-hero-foreground-desktop.png',
    },
    courseName: 'The Courage to Speak',
    courseTotalTime: 160,
    id: '1',
    lessonCount: 22,
    link: '/coach',
    linkCopy: 'Watch Intro',
    name: 'Maps <br/> Maponyane',
    nameColor: '#A6B4D4',
    subheading: 'Teaches',
};

const meta: Meta<typeof FeaturedHeroSection> = {
    title: 'Components/Sections/Featured Hero Section',
    component: FeaturedHeroSection,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof FeaturedHeroSection>;

const slides = [data, data, data];

export const NoBookmark: Story = {
    args: {
        data: slides,
    },
};

export const WithBookmark: Story = {
    args: {
        data: slides.map((slide) => ({ ...slide, isBookmarkActive: false })),
    },
};

export const WithBookmarkEnabled: Story = {
    args: {
        data: slides.map((slide) => ({ ...slide, isBookmarkActive: true })),
    },
};
