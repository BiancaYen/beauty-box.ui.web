import { Meta, StoryObj } from '@storybook/react';

// Components
import { MainMenu, MainMenuLinksProps } from '@/components/global/main-menu';

// Data
const links: MainMenuLinksProps[] = [
    { link: '/', copy: 'Home' },
    { link: '/discover', copy: 'Discover' },
    { link: '/coaches', copy: 'Coaches' },
    { link: '/platforms', copy: 'Explore Platforms' },
    {
        copy: 'Categories',
        subMenu: [
            { link: '/art', copy: 'Art & Design' },
            { link: '/business', copy: 'Business' },
            { link: '/entertainment', copy: 'Entertainment' },
            { link: '/lifestyle', copy: 'Lifestyle' },
            { link: '/sport', copy: 'Sport' },
        ],
    },
];

const meta: Meta<typeof MainMenu> = {
    title: 'Components/Main Menu',
    component: MainMenu,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof MainMenu>;

export const Primary: Story = {
    args: {
        isActive: true,
        links,
        partnerLogo: {
            alt: 'Connected by Vodacom',
            height: 27,
            src: '/images/storybook/connected-by-vodacom.png',
            width: 183,
        },
        onClose: () => {},
    },
};
