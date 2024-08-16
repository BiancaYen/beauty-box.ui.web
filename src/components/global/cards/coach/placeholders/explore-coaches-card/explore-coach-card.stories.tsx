import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ExploreCoachesCard } from '@/components/global/cards/coach/placeholders/explore-coaches-card';

const meta: Meta<typeof ExploreCoachesCard> = {
    title: 'Components/Cards/Placeholders/Explore Coaches',
    component: ExploreCoachesCard,
};

export default meta;

type Story = StoryObj<typeof ExploreCoachesCard>;

export const Primary: Story = {};
