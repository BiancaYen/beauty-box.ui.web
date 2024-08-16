import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { PlaybookIcon } from '@/components/icons';

const meta: Meta<typeof PlaybookIcon> = {
    title: 'Components/Icons/Playbook Icon',
    component: PlaybookIcon,
    decorators: [
        (Story) => (
            <div className="bg-default-black p-2">
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof PlaybookIcon>;

export const Primary: Story = {};
