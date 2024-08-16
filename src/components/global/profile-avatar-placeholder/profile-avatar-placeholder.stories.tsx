import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ProfileAvatarEpisodePlaceholder } from '@/components/global/profile-avatar-placeholder';

const meta: Meta<typeof ProfileAvatarEpisodePlaceholder> = {
    title: 'Components/Profile Avatar Placeholder',
    component: ProfileAvatarEpisodePlaceholder,
    decorators: [
        (Story) => (
            <div className="!w-48">
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof ProfileAvatarEpisodePlaceholder>;

export const Primary: Story = {
};
