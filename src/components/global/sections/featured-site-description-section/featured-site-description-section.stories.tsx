import type { Meta, StoryObj } from '@storybook/react';

// Components
import { FeaturedSiteDescriptionSection } from '@/components/global/sections/featured-site-description-section';

const meta: Meta<typeof FeaturedSiteDescriptionSection> = {
    title: 'Components/Sections/Featured Site Description Section',
    component: FeaturedSiteDescriptionSection,
};

export default meta;

type Story = StoryObj<typeof FeaturedSiteDescriptionSection>;

export const Primary: Story = {
    args: {
        backgroundImage: {
            alt: 'Backdrop',
            src: '/images/storybook/about-platform-bg-mobile.png',
        },
        backgroundImageDesktop: {
            alt: 'Backdrop with the faces of popular coaches',
            src: '/images/storybook/about-platform-bg-desktop.jpg',
        },
        description: `<strong>Master Stream</strong> is a <strong>proudly South African education platform</strong> that provides you with 
        access to a series of locally produced online content taught by South Africa’s icons, who impart their
        wisdom, learnings and experience through short videos, allowing a viewer to learn what makes these icons rise -
        and take home the skills to level up your own game.`,
        foregroundImage: {
            alt: 'Faces of popular coaches',
            src: '/images/storybook/about-platform-foreground-mobile.png',
        },
        heading: 'What is Master Stream?',
        headingTag: 'h2',
        link: '/courses',
        linkCopy: 'Explore Classes',
        note: 'This is a journey of extraordinary humanness; a playful, personal and talented learning journey, like no other.',
    },
};
