import type { Meta, StoryObj } from '@storybook/react';

// Components
import { SectionHeading6 } from '@/components/global/section-heading-6';

const meta: Meta<typeof SectionHeading6> = {
    title: 'Components/Section Headings/Section Heading 6',
    component: SectionHeading6,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof SectionHeading6>;

export const Primary: Story = {
    args: {
        subheading: 'Music & TV',
        heading: 'Maps Maponyane',
    },
};
