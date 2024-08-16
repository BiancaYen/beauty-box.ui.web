import { Meta, StoryObj } from '@storybook/react';

// Components
import { Tabs, TabsItemProps } from '@/components/global/tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs/Tabs',
    component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const items: TabsItemProps[] = [
    { id: 'business', copy: 'Business' },
    { id: 'communication', copy: 'Communication' },
    { id: 'creativity', copy: 'Creativity' },
    { id: 'fitness', copy: 'Fitness' },
    { id: 'humanity', copy: 'Humanity' },
    { id: 'lifestyle', copy: 'Lifestyle' },
    { id: 'media', copy: 'Media' },
];

export const Primary: Story = {
    args: {
        itemsList: items,
        onActiveTabToggle: (id) => {
            // eslint-disable-next-line no-console
            console.log('Selected ID', id);
        },
    },
};
