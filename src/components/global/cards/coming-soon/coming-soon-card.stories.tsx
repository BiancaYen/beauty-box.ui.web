import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ComingSoonCard } from '@/components/global/cards/coming-soon';

const meta: Meta<typeof ComingSoonCard> = {
    title: 'Components/Cards/Coming Soon Card',
    component: ComingSoonCard,
};

export default meta;

type Story = StoryObj<typeof ComingSoonCard>;

export const Primary: Story = {
    args: {
        backgroundImage: {
            alt: 'Photo of Albie & Lwando',
            src: '/images/storybook/test-coach-coming-soon.jpg',
        },
        category: 'Lifestyle',
        categoryColor: '#ed5b39',
        coach: 'Albie & Lwando',
        fallbackImageSrc: '/images/placeholders/coming-soon-placeholder.jpg',
        headingTag: 'h2',
        isLoading: false,
    },
};

Primary.argTypes = {
    categoryColor: {
        name: 'categoryColor',
        options: [0, 1, 2, 3, 4], // iterator
        mapping: ['#A81743', '#084b91', '#9a0707', '#ed5b39', '#006987'], // values
        control: {
            type: 'select',
            labels: [
                'Art & Design',
                'Business',
                'Entertainment',
                'Lifestyle',
                'Sports',
            ],
        },
    },
    headingTag: {
        options: ['h2', 'h3'],
        control: { type: 'radio' },
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
