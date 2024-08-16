'use client';

import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Rating } from '@/components/global/rating';

const meta: Meta<typeof Rating> = {
    title: 'Components/Rating',
    component: Rating,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof Rating>;

const RenderRating = () => (
    <div className="flex flex-col gap-5 p-2">
        <Rating copy="Editor's Choice" stars={5} />
        <Rating copy="(123 Reviews)" stars={4} />
        <Rating copy="(46 Reviews)" stars={3} />
        <Rating copy="(2 Reviews)" stars={2} />
        <Rating copy="(1 Reviews)" stars={1} />
        <Rating copy="(No Reviews)" stars={0} />
    </div>
);

export const Playground: Story = {
    args: {
        copy: 'Editor\'s Choice',
        stars: 5,
    },
};

export const Examples: Story = {
    render: RenderRating,
};

