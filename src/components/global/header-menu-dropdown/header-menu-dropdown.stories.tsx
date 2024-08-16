import { Meta, StoryObj } from '@storybook/react';
import { HeaderMenuDropdown } from '@/components/global/header-menu-dropdown';

const meta: Meta<typeof HeaderMenuDropdown> = {
    title: 'Components/Header Menu Dropdown',
    component: HeaderMenuDropdown,
};

export default meta;

type Story = StoryObj<typeof HeaderMenuDropdown>;

const linksList = [
    { copy: 'Art & Design', link: '/art' },
    { copy: 'Business', link: '/business' },
    { copy: 'Entertainment', link: '/entertainment' },
    { copy: 'Lifestyle', link: '/lifestyle' },
    { copy: 'Sports', link: '/sports' },
];

export const Primary: Story = {
    args: {
        copy: 'Sports',
        menuItems: linksList,
    },
};
