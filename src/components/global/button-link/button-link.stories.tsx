import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ButtonLink } from '@/components/global/button-link';

// Icons
import { ChevronRightIcon } from '@/components/icons';

const meta: Meta<typeof ButtonLink> = {
    component: ButtonLink,
    title: 'Components/ButtonLink',
};

export default meta;

type Story = StoryObj<typeof ButtonLink>;

export const Primary: Story = {
    args: {
        children: 'Button Label',
        href: 'http://',
    },
};

export const WithIcon: Story = {
    args: {
        children: 'Button Label',
        href: 'http://',
        icon: ChevronRightIcon,
    },
};

