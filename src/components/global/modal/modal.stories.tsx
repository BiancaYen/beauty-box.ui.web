import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Modal } from '@/components/global/modal';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    args: {
        isActive: true,
    },
    component: Modal,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        className: 'w-full h-full p-2',
        children: 'Modal Content',
    },
};
