import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

// Components
import { TabToggle, TabToggleProps } from '@/components/global/tabs';

const meta: Meta<typeof TabToggle> = {
    title: 'Components/Tabs/Tab Toggle',
    component: TabToggle,
};

export default meta;

type Story = StoryObj<typeof TabToggle>;

const data = { items: [{
    index: 1,
    tab: 'Class',
},
{
    index: 2,
    tab: 'Single Lesson',
}] };

const RenderTabToggle = (args: TabToggleProps) => {
    const [index, setIndex] = useState(0);

    return (
        <TabToggle
            {...args}
            activeTabIndex={index}
            onClick={(value: number) => setIndex(value - 1)}
        />
    );
};

export const Default: Story = {
    args: {
        items: data.items,
    },
    render: RenderTabToggle,
    parameters: {
        controls: {
            exclude: /.*/g,
        },
    },
};
