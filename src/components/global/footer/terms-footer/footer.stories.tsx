import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Footer } from '@/components/global/footer';

const meta: Meta<typeof Footer> = {
    title: 'Components/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
};

const links = [
    { copy: 'Terms and Conditions', link: '/terms-and-conditions' },
    { copy: 'FAQ', link: '/faq' },
    { copy: 'Privacy Policy', link: '/privacy-policy' },
    { copy: 'Unsubscribe', link: '/unsubscribe' },
];

export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
    args: {
        copy: '©Copyright 2023',
        links,
        partnerLogo: {
            alt: 'Connected by Vodacom',
            height: 27,
            src: '/images/storybook/connected-by-vodacom.png',
            width: 183,
        },
    },
};
