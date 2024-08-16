import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ComingSoonSection, ComingSoonSectionProps } from '@/components/global/sections/coming-soon-section';

// Data
const args: ComingSoonSectionProps = {
    data: [
        {
            backgroundImage: {
                alt: 'Photo of Tshepo ‘The Jean Maker’',
                src: '/images/placeholders/coming-soon-placeholder.jpg',
            },
            category: 'Fashion',
            categoryColor: '#3a00ab',
            coach: 'Tshepo ‘The Jean Maker’',
            fallbackImageSrc: '/images/placeholders/coming-soon-placeholder.jpg',
            headingTag: 'h2',
            id: '1',
            isLoading: false,
        },
        {
            backgroundImage: {
                alt: 'Photo of Santie Botha',
                src: '/images/placeholders/coming-soon-placeholder.jpg',
            },
            category: 'Business & Marketing',
            categoryColor: '#084b91',
            coach: 'Santie Botha',
            fallbackImageSrc: '/images/placeholders/coming-soon-placeholder.jpg',
            headingTag: 'h2',
            id: '2',
            isLoading: false,
        },
        {
            backgroundImage: {
                alt: 'Photo of Albie & Lwando',
                src: '/images/storybook/test-coach-coming-soon.jpg',
            },
            category: 'Humanity',
            categoryColor: '#c99717',
            coach: 'Albie & Lwando',
            fallbackImageSrc: '/images/placeholders/coming-soon-placeholder.jpg',
            headingTag: 'h2',
            id: '3',
            isLoading: false,
        },
        {
            backgroundImage: {
                alt: 'Photo of Lucas Radebe',
                src: '/images/placeholders/coming-soon-placeholder.jpg',
            },
            category: 'Sports',
            categoryColor: '#006987',
            coach: 'Lucas Radebe',
            fallbackImageSrc: '/images/placeholders/coming-soon-placeholder.jpg',
            headingTag: 'h2',
            id: '4',
            isLoading: false,
        },
    ],
    heading: 'Coming Soon',
};

const meta: Meta<typeof ComingSoonSection> = {
    title: 'Components/Sections/Coming Soon Section',
    component: ComingSoonSection,
};

export default meta;

type Story = StoryObj<typeof ComingSoonSection>;

export const Primary: Story = {
    args: {
        ...args,
    },
};

export const Loading: Story = {
    args: {
        ...args,
        data: args.data.map((data) => ({ ...data, isLoading: true })),
    },
};
