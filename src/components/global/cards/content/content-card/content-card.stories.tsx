'use client';

import type { Meta, StoryObj } from '@storybook/react';

// Components
import { ContentCard } from '@/components/global/cards/content/content-card';

// Icons
import { PlayIcon } from '@/components/icons';

// Data
const data = {
    backgroundImage: {
        alt: 'Lesson Thumbnail',
        src: '/images/storybook/test-thumbnail.jpg',
    },
    classes: {
        // NB for setting width and height
        bookmarkWrapper: 'aspect-[5/3] w-[15.625rem]',
    },
    id: '1',
    link: '/some-link',
    tags: {
        left: {
            copy: 'left',
        },
        right: {
            copy: 'right',
            iconSrc: <PlayIcon />,
        },
    },
};

const meta: Meta<typeof ContentCard> = {
    title: 'Components/Cards/Content/Content Card',
    component: ContentCard,
};

export default meta;

type Story = StoryObj<typeof ContentCard>;

export const Primary: Story = {
    args: data,
};

export const WithBookmark: Story = {
    args: {
        isBookmarkActive: true,
        ...data,
    },
};
