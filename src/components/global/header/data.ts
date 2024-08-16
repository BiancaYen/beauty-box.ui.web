import { HeaderLinksType } from '@/components/global/header/header';

// Icons
import { CoachesIcon } from '@/components/icons/coaches';
import { DiscoverIcon } from '@/components/icons/discover';
import { HomeIcon } from '@/components/icons/home';
import { BookmarkIcon } from '@/components/icons';

import {
    MdHome, MdLeaderboard, MdOutlineAutoGraph, MdTimer,
} from 'react-icons/md';
import { IoMdHome, IoMdImage } from 'react-icons/io';
import { BiCloset } from 'react-icons/bi';

export const headerLinks: HeaderLinksType = [
    { link: '/', icon: IoMdHome, label: 'Home', position: '12.5%' },
    { link: '/feed', icon: IoMdImage, label: 'Feed', position: '37.5%' },
    { link: '/leaderboard', icon: MdLeaderboard, label: 'Leaderboard', position: '62.5%' },
    { link: '/looks', icon: BiCloset, label: 'Looks', position: '87.5%' },
    {
        label: 'Categories',
        subMenu: [
            { link: '/art', label: 'Art & Design' },
            { link: '/business', label: 'Business' },
            { link: '/entertainment', label: 'Entertainment' },
            { link: '/lifestyle', label: 'Lifestyle' },
            { link: '/sport', label: 'Sport' },
        ],
    },
    // { href: '/platforms', iconActive: PlatformsActiveIcon, iconDefault: PlatformsIcon, label: 'Platforms', isDisabled: true },
];
