'use client';

import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';
import React, {
    KeyboardEvent, useMemo, useState,
} from 'react';
import {
    IoIosHeart, IoIosSearch, IoIosCamera,
} from 'react-icons/io';
import { FaBarsStaggered } from 'react-icons/fa6';

// Components
import { HeaderNavigationLink } from '@/components/global/header-navigation-link';
import { HeaderMenuLink } from '@/components/global/header-menu-link';
import { HeaderMenuDropdown } from '@/components/global/header-menu-dropdown';
import { SearchInput } from '@/components/global/search';

// Data
import { headerLinks } from '@/components/global/header/data';
import Link from 'next/link';
import {position} from 'polished';

import { config } from '../../../../public/beauty-breeze/data';

// Images

// Types
interface LinkWithIconProps {
    href: string,
    iconActive: string | StaticImageData,
    iconDefault: string | StaticImageData,
    isDisabled?: boolean,
    label: string,
    subMenu?: never,
}

interface LinkWithSubMenuProps {
    href?: never,
    iconActive?: never,
    iconDefault?: never,
    isDisabled?: boolean,
    label: string,
    subMenu: {
        href: string,
        label: string,
    }[],
}

export type HeaderLinksType = (LinkWithIconProps | LinkWithSubMenuProps)[];

export interface HeaderProps {
    isAuthenticated?: boolean,
    linksList: HeaderLinksType,
}

export const Header: React.FC<HeaderProps> = ({
    isAuthenticated,
    linksList,
}) => {
    // Navigation
    const pathname = usePathname();

    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const handleLogin = () => {
        // TODO:Add login action
        const loginAction = '';
        return loginAction;
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    // Memoized
    const activePosition = useMemo(() => {
        const { position } = headerLinks.find(({ link }) => link?.split('/')[1] === pathname.split('/')[1]) || {};
        return position;
    }, [pathname]);

    return (
        <header className="fixed z-20 bg-default-white top-0 inset-0 w-full px-5 py-5 flex items-center justify-stretch rounded-bl-3xl h-max gap-2 shadow-md">
            <Link href="/">
                <Image
                    alt="My Garden"
                    src={config.logoImage}
                    height={35}
                    width={35}
                    priority
                />
            </Link>

            <SearchInput />
            <Link className="relative aspect-square w-[2.8rem] hover:scale-125 transition-all" href="/profile">
                <div className="absolute -right-2 -top-2 z-20 text-primary-default">
                    <IoIosHeart size="1.5rem" />
                </div>
                <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                        alt="Biebie"
                        src="https://scontent.cdninstagram.com/v/t51.2885-19/292390783_198185242547275_7359505342953450734_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=6e3pzwjEHZEAX_dfIq-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfClL6XPOjhwdUHfZrVFaamgKXEEpiHhHS5_RAKX8SFmNg&oe=65701617"
                        fill
                    />
                </div>
            </Link>
        </header>
    );
};
