import type { Meta, StoryObj } from '@storybook/react';

// Components
import { FeaturedLessonSection } from './featured-lesson-section';

const meta: Meta<typeof FeaturedLessonSection> = {
    title: 'Components/Sections/Featured Lesson Section',
    component: FeaturedLessonSection,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof FeaturedLessonSection>;

const data = {
    backgroundImageSrc: 'images/storybook/featured-hero-background.png',
    backgroundImageDesktopSrc: 'images/storybook/featured-lesson-coach-desktop.jpg',
    buttonCopy: 'Start Lesson',
    coachImageSrc: 'images/storybook/featured-coach.png',
    coachImageDesktopSrc: 'images/storybook/featured-coach-desktop.png',
    copy: `You’re invited to take your seat to watch as the man behind the dynamic powerhouse brand dives into the heart of the
    art with which he’s built his legacy. Embark on a journey to find your voice, to speak with courage, and to make your
    vision a reality.
    <br />
    <br />
    Discover your voice and speak with courage. Master crowds of one person or thousands. Be deliberate about your vision, 
    your brand. Communicate, inspire, and make an impact!`,
    course: 'The Courage to <br/> Speak',
    id: '1',
    name: 'Maps Maponyane',
};

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

