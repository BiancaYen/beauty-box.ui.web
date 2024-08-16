import type { Meta, StoryObj } from '@storybook/react';

// Components
import { IntroducingCoachesSection } from '@/components/global/sections/introducing-coaches-section';

// Data
const data = {
    action: {
        copy: 'Explore',
        link: '/coaches',
    },
    data: [
        {
            backgroundImage: {
                alt: 'Ryan Sandes',
                src: './images/storybook/test-coach-2.png',
            },
            backgroundImageHover: {
                alt: 'Ryan Sandes',
                src: './images/storybook/test-coach-2-hover.png',
            },
            book: 'Masterbook',
            coach: 'Santie Botha',
            courseTotalTime: 160,
            categoryColor: '#006987',
            id: '1',
            isBookmarkActive: true,
            lessonCount: 12,
            link: '/',
            redirectCopy: 'View Class',
            subcategory: 'Business',
        },
        {
            backgroundImage: {
                alt: 'Ryan Sandes',
                src: './images/storybook/test-coach-2.png',
            },
            backgroundImageHover: {
                alt: 'Ryan Sandes',
                src: './images/storybook/test-coach-2-hover.png',
            },
            book: 'Masterbook',
            coach: 'Santie Botha',
            courseTotalTime: 160,
            categoryColor: '#006987',
            id: '1',
            isBookmarkActive: true,
            lessonCount: 12,
            link: '/',
            redirectCopy: 'View Class',
            subcategory: 'Business',
        },
        {
            backgroundImage: {
                alt: 'Ryan Sandes',
                src: './images/storybook/test-coach-2.png',
            },
            backgroundImageHover: {
                alt: 'Ryan Sandes',
                src: './images/storybook/test-coach-2-hover.png',
            },
            book: 'Masterbook',
            coach: 'Santie Botha',
            courseTotalTime: 160,
            categoryColor: '#006987',
            id: '1',
            isBookmarkActive: true,
            lessonCount: 12,
            link: '/',
            redirectCopy: 'View Class',
            subcategory: 'Business',
        },
        {
            backgroundImage: {
                alt: 'Ryan Sandes',
                src: './images/storybook/test-coach-2.png',
            },
            backgroundImageHover: {
                alt: 'Ryan Sandes',
                src: './images/storybook/test-coach-2-hover.png',
            },
            book: 'Masterbook',
            coach: 'Santie Botha',
            courseTotalTime: 160,
            categoryColor: '#006987',
            id: '1',
            isBookmarkActive: true,
            lessonCount: 12,
            link: '/',
            redirectCopy: 'View Class',
            subcategory: 'Business',
        },
    ],
    heading: 'Introducing Coaches',
};

const meta: Meta<typeof IntroducingCoachesSection> = {
    title: 'Components/Sections/Introducing Coaches Section',
    component: IntroducingCoachesSection,
    parameters: {
        layout: 'fullscreen',
    },
};

type Story = StoryObj<typeof IntroducingCoachesSection>;

export const Primary: Story = {
    args: {
        ...data,
    },
};

export default meta;
