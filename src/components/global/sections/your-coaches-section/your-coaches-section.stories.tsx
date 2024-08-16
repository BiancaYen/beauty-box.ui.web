import type { Meta, StoryObj } from '@storybook/react';

// Components
import { YourCoachesSection, YourCoachesSectionProps } from '@/components/global/sections/your-coaches-section';

// Types
import { CoachCardPropsExtended } from '@/components/global/sections/other-coaches-section';

// Data
const dataItem: Omit<CoachCardPropsExtended, 'id'> = {
    backgroundImage: {
        alt: 'Santie Botha',
        src: './images/storybook/test-coach-2.png',
    },
    backgroundImageHover: {
        alt: 'Santie Botha',
        src: './images/storybook/test-coach-2-hover.png',
    },
    book: 'Masterbook',
    categoryColor: '#006987',
    coach: 'Santie Botha',
    courseTotalTime: 160,
    isBookmarkActive: true,
    lessonCount: 12,
    link: '/',
    redirectCopy: 'View Class',
    subcategory: 'Business',
};

const data: YourCoachesSectionProps = {
    data: [
        {
            ...dataItem,
            id: '1',
        },
        {
            ...dataItem,
            id: '2',
        },
        {
            ...dataItem,
            id: '3',
        },
        {
            ...dataItem,
            id: '4',
        },
    ],
    heading: 'Your Coaches',
    noData: {
        copy: 'Check out the <strong>Coaches</strong> tab and bookmark your favourite coaches!',
        link: '/coaches',
    },
};

const meta: Meta<typeof YourCoachesSection> = {
    title: 'Components/Sections/Your Coaches Section',
    component: YourCoachesSection,
};

export default meta;

type Story = StoryObj<typeof YourCoachesSection>;

export const NoData: Story = {
    args: {
        ...data,
        data: [],
    },
};

export const Primary: Story = {
    args: {
        ...data,
    },
};
