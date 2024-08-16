import type { Meta, StoryObj } from '@storybook/react';

// Components
import { AddMoreCard } from '@/components/global/cards/placeholder/add-more-card';

const meta: Meta<typeof AddMoreCard> = {
    title: 'Components/Cards/Explore Card',
    component: AddMoreCard,
};

export default meta;

type Story = StoryObj<typeof AddMoreCard>;

export const Primary: Story = {
    args: {
        href: '',
    },
};
