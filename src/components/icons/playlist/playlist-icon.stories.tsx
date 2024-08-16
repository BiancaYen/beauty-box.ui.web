import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { PlaylistIcon } from '@/components/icons';

const meta: Meta<typeof PlaylistIcon> = {
    title: 'Components/Icons/Playlist Icon',
    component: PlaylistIcon,
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

type Story = StoryObj<typeof PlaylistIcon>;

export const Primary: Story = {};
