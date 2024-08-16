import type { Meta, StoryObj } from '@storybook/react';

// Components
import { SectionHeading1 } from '@/components/global/section-heading-1';

// Icons
import { BookmarkIcon } from '@/components/icons';

const meta: Meta<typeof SectionHeading1> = {
    title: 'Components/Section Headings/Section Heading 1',
    component: SectionHeading1,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof SectionHeading1>;

const argsTypes = {
    headingTag: {
        options: ['h2', 'h3', 'span'],
    },
    variant: {
        options: ['bold', 'normal'],
        control: { type: 'radio' },
    },
};

export const Primary: Story = {
    args: {
        action: {
            copy: 'Explore',
            link: '/some-link',
        },
        heading: 'Introducing Coaches',
    },
};

Primary.argTypes = argsTypes;

export const WithCustomIcon: Story = {
    args: {
        action: {
            copy: 'Bookmark',
            icon: BookmarkIcon,
            link: 'some-link',
        },
        heading: 'Lessons',
    },
};

WithCustomIcon.argTypes = argsTypes;

export const WithoutAction: Story = {
    args: {
        heading: 'Continue Watching',
    },
};

WithoutAction.argTypes = argsTypes;

export const Light: Story = {
    args: {
        action: {
            copy: 'Explore',
            link: '/some-link',
        },
        heading: 'Coming Soon',
        variant: 'normal',
    },
};

Light.argTypes = argsTypes;
