import type { Meta, StoryObj } from '@storybook/react';

// Components
import { HeaderNavigationLink } from '@/components/global/header-navigation-link';

// Icons
import { HomeActiveIcon, HomeIcon } from '../../../../public/images/icons';

const meta: Meta<typeof HeaderNavigationLink> = {
    title: 'Components/Header Navigation Link',
    component: HeaderNavigationLink,
};

export default meta;

type Story = StoryObj<typeof HeaderNavigationLink>;

export const Primary: Story = {
    args: {
        copy: 'Home',
        iconActive: HomeActiveIcon,
        iconDefault: HomeIcon,
        link: '/home',
    },
};
