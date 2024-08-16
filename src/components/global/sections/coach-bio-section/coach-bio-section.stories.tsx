'use client';

import type { Meta, StoryObj } from '@storybook/react';

// Components
import { CoachBioSection } from '@/components/global/sections/coach-bio-section';

// Data
const data = {
    backgroundImage: {
        alt: 'Maps Maponyane',
        src: '/images/storybook/featured-coach.png',
    },
    book: 'Masterbook',
    bookmarkButtonCopy: {
        active: 'Undo Bookmark',
        inactive: 'Bookmark Coach',
    },
    category: 'Music & TV',
    coach: 'Maps <br/> Maponyane',
    courseTotalTime: 160,
    // eslint-disable-next-line max-len
    description: 'With humble beginnings growing up in Lydenburg, Tshepo Mohlala has worked hard to turn his dusty denim daydreams into a powerful African fashion label with international standing! <br/> <br/> He has fitted the likes of Khuli Chana, DJ Oskido, Cassper Nyovest and Meghan Markle (to name, but a few), and won the Twyg Sustainable Fashion Awards for the Trans-Seasonal Category in 2020.',
    lessonCount: 12,
    videoSrc: 'https://760020dac27e20d936b2-a6f64104c6f909ec2d398b11ad91465d.ssl.cf5.rackcdn.com/2023/Video/Life%20Skills/Why%20Does%20Video%20Chatting%20Cause%20Fatigue.mp4',
    thumbnailImage: {
        alt: 'Lesson Thumbnail',
        src: '/images/storybook/test-thumbnail.jpg',
    },
};

const meta: Meta<typeof CoachBioSection> = {
    title: 'Components/Sections/Coach Bio Section',
    component: CoachBioSection,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof CoachBioSection>;

export const Primary: Story = {
    args: {
        ...data,
    },
};

export const Bookmarked: Story = {
    args: {
        ...data,
        isBookmarkActive: true,
    },
};
