import type { Meta, StoryObj } from '@storybook/react';

// Components
import { IconTag } from '@/components/global/tag';

// Icons
import { CheckIcon, PlayIcon } from '@/components/icons';

const meta: Meta<typeof IconTag> = {
    title: 'Components/Tags/Icon Tag',
    component: IconTag,
};

export default meta;

type Story = StoryObj<typeof IconTag>;

export const IconBothSides: Story = {
    args: {
        copy: 'Skillbook',
        iconLeft: <PlayIcon />,
        iconRight: <CheckIcon />,
    },
};

export const IconLeft: Story = {
    args: {
        copy: 'Skillbook',
        iconLeft: <PlayIcon />,
    },
};

export const IconRight: Story = {
    args: {
        copy: 'Skillbook',
        iconRight: <CheckIcon />,
    },
};

