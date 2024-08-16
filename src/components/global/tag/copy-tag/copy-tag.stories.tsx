import type { Meta, StoryObj } from '@storybook/react';

// Components
import { CopyTag } from '@/components/global/tag';

const meta: Meta<typeof CopyTag> = {
    title: 'Components/Tags/Copy Tag',
    component: CopyTag,
};

export default meta;

type Story = StoryObj<typeof CopyTag>;

// Switch to white label theme to see secondary color. On base versions variant colors are similar
export const Primary: Story = {
    args: {
        isActive: true,
        copy: 'Fashion',
    },
};

