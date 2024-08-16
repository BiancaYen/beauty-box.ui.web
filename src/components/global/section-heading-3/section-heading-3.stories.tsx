import type { Meta, StoryObj } from '@storybook/react';

// Components
import { SectionHeading3 } from '@/components/global/section-heading-3';

const meta: Meta<typeof SectionHeading3> = {
    title: 'Components/Section Headings/Section Heading 3',
    component: SectionHeading3,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof SectionHeading3>;

export const Primary: Story = {
    args: {
        heading: 'Coach of the Month',
    },
};

const argsTypes = {
    headingTag: {
        options: ['h2', 'h3', 'div'],
    },
};

Primary.argTypes = argsTypes;
