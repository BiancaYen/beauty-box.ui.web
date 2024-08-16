import type { Meta, StoryObj } from '@storybook/react';

// Icons
import { DownloadIcon } from '@/components/icons';

const meta: Meta<typeof DownloadIcon> = {
    title: 'Components/Icons/DownloadIcon',
    component: DownloadIcon,
};

export default meta;

type Story = StoryObj<typeof DownloadIcon>;

export const Primary: Story = {
    args: {
        fill: 'var(--color-default-black)',
    },
};
