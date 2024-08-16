import type { Meta, StoryObj } from '@storybook/react';

// Components
import { SectionHeading2 } from '@/components/global/section-heading-2';

const meta: Meta<typeof SectionHeading2> = {
    title: 'Components/Section Headings/Section Heading 2',
    component: SectionHeading2,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof SectionHeading2>;

export const Primary: Story = {
    args: {
        heading: 'What interests you?',
    },
};

const argsTypes = {
    headingTag: {
        options: ['h2', 'h3', 'div'],
    },
};

Primary.argTypes = argsTypes;
