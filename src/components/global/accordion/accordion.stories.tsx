import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Accordion } from '@/components/global/accordion';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
    args: {
        heading: 'Accordion',
        children: 'Some Content',
    },
};
