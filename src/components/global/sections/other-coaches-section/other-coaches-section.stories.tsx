import type { Meta, StoryObj } from '@storybook/react';

// Components
import { OtherCoachesSection } from '@/components/global/sections/other-coaches-section';

// Data
const dataItem = {
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
    id: '1',
    isBookmarkActive: false,
    lessonCount: 12,
    link: '/coach',
    redirectCopy: 'View Class',
    subcategory: 'Business',
};

const data = {
    action: {
        copy: 'Explore',
        link: '/coaches',
    },
    copy: ' Tap into the life experiences of your local heroes to learn skills only they could teach.',
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
    heading: 'Other Coaches also liked',
};

const meta: Meta<typeof OtherCoachesSection> = {
    title: 'Components/Sections/Other Coaches Section',
    component: OtherCoachesSection,
};

export default meta;

type Story = StoryObj<typeof OtherCoachesSection>;

export const Primary: Story = {
    args: {
        ...data,
    },
};
