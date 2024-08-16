import type { Meta, StoryObj } from '@storybook/react';
import { IntroducingCoachesTabsSection } from '@/components/global/sections/introducing-coaches-tabs-section';
import { TabsItemProps } from '@/components/global/tabs';
import { CoachIntroductionCardProps } from '@/components/global/cards/coach/coach-introduction-card';

// Data
enum CategoryIdsEnum {
    artAndDesign = 1,
    business,
    entertainment,
    lifestyle,
    sports,
}

const tabsList: TabsItemProps[] = [
    { id: CategoryIdsEnum.artAndDesign, copy: 'Art & Design' },
    { id: CategoryIdsEnum.business, copy: 'Business' },
    { id: CategoryIdsEnum.entertainment, copy: 'Entertainment' },
    { id: CategoryIdsEnum.lifestyle, copy: 'Lifestyle' },
    { id: CategoryIdsEnum.sports, copy: 'Sports' },
];

const commonData = {
    backgroundImage: {
        alt: 'Coach',
        src: './images/storybook/test-coach.png',
    },
    backgroundImageHover: {
        alt: 'Coach',
        src: './images/storybook/test-coach-hover.png',
    },
    book: 'Masterbook',
    categoryId: 1,
    description: `Discover how to design your trail of life; 
how to run for purpose and pleasure; how to back 
yourself, push yourself and ultimately steer your 
sights towards the one and only summit that’ll set 
your soul on fire.`,
    isBookmarkActive: false,
    redirectCopy: 'View Coach',
};

const data: CoachIntroductionCardProps[] = [
    {
        ...commonData,
        categoryColor: '#A81743',
        categoryId: CategoryIdsEnum.artAndDesign,
        coach: 'Jodi Bieber',
        courseTotalTime: 120,
        id: 'jodi-bieber',
        lessonCount: 8,
        link: '/coaches',
        subheading: 'The Ability to See Beyond the Lens',
        subcategory: 'Photography',
    },
    {
        ...commonData,
        categoryColor: '#084B91',
        categoryId: CategoryIdsEnum.business,
        coach: 'Santie Botha',
        courseTotalTime: 242,
        id: 'santie-botha',
        isBookmarkActive: true,
        lessonCount: 16,
        link: '/coaches',
        subheading: 'Collective Leadership',
        subcategory: 'Business',
    },
    {
        ...commonData,
        categoryColor: '#9a0707',
        categoryId: CategoryIdsEnum.entertainment,
        coach: 'Yvonne Chaka Chaka',
        courseTotalTime: 85,
        id: 'yvone-chanka-chaka',
        isBookmarkActive: true,
        lessonCount: 4,
        link: '/coaches',
        subheading: 'Guts & Grace in the Music Business',
        subcategory: 'Music & TV',
    },
    {
        ...commonData,
        categoryColor: '#A81743',
        categoryId: CategoryIdsEnum.artAndDesign,
        coach: 'Thepo "The Jean Master Maker"',
        courseTotalTime: 200,
        id: 'thepo',
        lessonCount: 28,
        link: '/coaches',
        subheading: 'Design Your Own Story',
        subcategory: 'Fashion Design',
    },
    {
        ...commonData,
        categoryColor: '#9a0707',
        categoryId: CategoryIdsEnum.entertainment,
        coach: 'Maps Maponyane',
        courseTotalTime: 188,
        id: 'maps-maponyane',
        lessonCount: 14,
        link: '/coaches',
        subheading: 'The Courage to Speak',
        subcategory: 'Presenting',
    },
    {
        ...commonData,
        categoryColor: '#ed5b39',
        categoryId: CategoryIdsEnum.lifestyle,
        coach: 'The Lazy Makoti',
        courseTotalTime: 45,
        id: 'the-lazy-makoti',
        lessonCount: 11,
        link: '/coaches',
        subheading: 'The Love Language of Food',
        subcategory: 'Food',
    },
    {
        ...commonData,
        categoryColor: '#006987',
        categoryId: CategoryIdsEnum.sports,
        coach: 'Ryan Sandes',
        courseTotalTime: 160,
        id: 'ryan-sandes',
        lessonCount: 12,
        link: '/coaches',
        subheading: 'Mastering your own Trail',
        subcategory: 'Sports',
    },
    {
        ...commonData,
        categoryColor: '#006987',
        categoryId: CategoryIdsEnum.sports,
        coach: 'Lucas Redebe',
        courseTotalTime: 45,
        id: 'lucas-redebe',
        isBookmarkActive: true,
        lessonCount: 3,
        link: '/coaches',
        subheading: 'Sportsmanship',
        subcategory: 'Sportsmanship',
    },
];

const meta: Meta<typeof IntroducingCoachesTabsSection> = {
    title: 'Components/Sections/Introducing Coaches Tabs Section',
    component: IntroducingCoachesTabsSection,
    parameters: {
        layout: 'fullscreen',
    },
};

type Story = StoryObj<typeof IntroducingCoachesTabsSection>;

export const Primary: Story = {
    args: {
        data,
        heading: 'Introducing Coaches',
        tabsList,
    },
};

export default meta;
