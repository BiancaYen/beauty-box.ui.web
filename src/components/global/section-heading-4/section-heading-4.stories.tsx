import type { Meta, StoryObj } from '@storybook/react';

// Components
import { SectionHeading4 } from '@/components/global/section-heading-4';

const meta: Meta<typeof SectionHeading4> = {
    title: 'Components/Section Headings/Section Heading 4',
    component: SectionHeading4,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof SectionHeading4>;

export const Primary: Story = {
    args: {
        heading: 'Designing your own story',
        subheading: 'Discover the meaning behind Tshepo’s logo, and the women who shaped him into a local icon with global designs.',
    },
};

const argsTypes = {
    headingTag: {
        options: ['h2', 'h3', 'div'],
    },
};

Primary.argTypes = argsTypes;
