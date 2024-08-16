import type { Meta, StoryObj } from '@storybook/react';

// Components
import { InterestsFilterSection } from '@/components/global/sections/interests-filter-section';

// Types
import { CoachIntroductionCardProps } from '@/components/global/cards/coach/coach-introduction-card';
import { FilterOptionsProps } from '@/components/global/filters';

// Data
const data: CoachIntroductionCardProps = {
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

const filterOptions: FilterOptionsProps[] = [
    { id: 'business', copy: 'Business' },
    { id: 'communication', copy: 'Communication' },
    { id: 'creativity', copy: 'Creativity' },
    { id: 'entrepreneurship', copy: 'Entrepreneurship' },
    { id: 'fitness', copy: 'Fitness' },
    { id: 'humanity', copy: 'Humanity' },
    { id: 'lifestyle', copy: 'Lifestyle' },
    { id: 'marketing', copy: 'Marketing' },
    { id: 'media', copy: 'Media' },
    { id: 'music', copy: 'Music' },
    { id: 'performance', copy: 'Performance' },
    { id: 'sports', copy: 'Sports' },
];

const meta: Meta<typeof InterestsFilterSection> = {
    title: 'Components/Sections/Interests Filter Section',
    component: InterestsFilterSection,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof InterestsFilterSection>;

export const Primary: Story = {
    args: {
        buttonCopy: {
            default: 'Select Your Interests!',
            newSearch: 'Start New Search',
            selected: 'Find Your Coach',
        },
        data: [
            {
                ...data,
                id: '1',
            },
            {
                ...data,
                id: '2',
            },
            {
                ...data,
                id: '3',
            },
            {
                ...data,
                id: '4',
            },
            {
                ...data,
                id: '5',
            },
            {
                ...data,
                id: '6',
            },
            {
                ...data,
                id: '7',
            },
        ],
        filterOptions,
        headingDefault: 'What interests you?',
        headingResult: 'Found your coaches!',
    },
};
