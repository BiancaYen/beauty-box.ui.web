import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Header } from '@/components/global/header';

// Data
import { headerLinks, headerLogo } from '@/components/global/header/data';

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
    args: {
        links: headerLinks,
        logo: {
            alt: headerLogo.alt,
            height: headerLogo.height,
            src: headerLogo.src,
            width: headerLogo.width,
        },
        partnerLogo: {
            alt: 'Connected by Vodacom',
            height: 27,
            src: '/images/storybook/connected-by-vodacom.png',
            width: 183,
        },
    },
};
