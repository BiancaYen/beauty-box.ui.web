import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ProfileAvatarWithInfo } from '@/components/global/profile-avatar-with-info';

// Data
const data = {
    copy: 'EP 4: The Scissors, the Iron and the Tape the hidden content',
    heading: 'Tshepo ‘The Jean Maker’',
    imageAlt: 'Profile Image of ',
    imageSrc: '/images/storybook/profile-tshepo-jeans.jpg',
};

const meta: Meta<typeof ProfileAvatarWithInfo> = {
    title: 'Components/Profile Avatar With Info',
    component: ProfileAvatarWithInfo,
};

export default meta;

type Story = StoryObj<typeof ProfileAvatarWithInfo>;

export const Default: Story = {
    args: data,
};

export const Truncated: Story = {
    render: () => (
        <div style={{ width: '200px' }}>
            <ProfileAvatarWithInfo
                {...data}
            />
        </div>
    ),
};
