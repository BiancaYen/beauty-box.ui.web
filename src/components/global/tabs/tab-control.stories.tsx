import type { Meta, StoryObj } from '@storybook/react';

// Components
import { TabControl } from '@/components/global/tabs';

const meta: Meta<typeof TabControl> = {
    title: 'Components/Tabs/Tab Control',
    component: TabControl,
};

export default meta;

type Story = StoryObj<typeof TabControl>;

const RenderTabPane = (text: string) => (
    <div className="border-systemDefault-tint-2 text-systemDefault-tint-2 flex h-[15rem] w-full items-center justify-center border border-dotted align-middle">
        Content:
        {' '}
        { text }
    </div>
);

const args = { heading: 'Heading Text',
    items: [{
        component: RenderTabPane('Class'),
        index: 1,
        tab: 'Class',
    },
    {
        component: RenderTabPane('Single Lesson'),
        index: 2,
        tab: 'Single Lesson',
    }] };

export const Default: Story = {
    args: {
        items: args.items,
    },
    parameters: {
        controls: {
            exclude: /.*/g,
        },
    },
};

export const WithHeading: Story = {
    args: {
        heading: args.heading,
        items: args.items,
    },
    parameters: {
        controls: {
            exclude: /.*/g,
        },
    },
};

export const WithSearchBar: Story = {
    args: {
        items: args.items,
        showSearch: true,
    },
    parameters: {
        controls: {
            exclude: /.*/g,
        },
    },
};

export const WithSearchBarAndHeading: Story = {
    args: {
        heading: args.heading,
        items: args.items,
        showSearch: true,
    },
    parameters: {
        controls: {
            exclude: /.*/g,
        },
    },
};
