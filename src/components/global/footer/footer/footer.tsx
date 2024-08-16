'use client';

import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';
import React, {
    FC,
    KeyboardEvent, useMemo, useState,
} from 'react';
import {
    IoIosHeart, IoIosSearch, IoIosCamera,
} from 'react-icons/io';

// Components
import { HeaderNavigationLink } from '@/components/global/header-navigation-link';

// Data
import { headerLinks } from '@/components/global/header/data';

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

export interface FooterProps {
    isAuthenticated?: boolean,
    linksList: HeaderLinksType,
}

export const Footer: FC = () => {
    // Navigation
    const pathname = usePathname();

    const [isActiveMenu, setIsActiveMenu] = useState(false);

    // Memoized
    const activePosition = useMemo(() => {
        const { position } = headerLinks.find(({ link }) => link?.split('/')[1] === pathname.split('/')[1]) || {};
        return position;
    }, [pathname]);

    return (
        <footer
            className={classNames(
                '-mb-[2px] bg-default-white fixed inset-x-0 bottom-0 z-20 flex item-center justify-center md:absolute md:bottom-[reset]',
                'w-full px-4 py-2',
                'rounded-t-2xl shadow-nav-header',
            )}
        >
            { /* Active effect */ }
            <div
                className="absolute inset-x-0 bottom-0 z-10 h-full w-full px-4"
            >
                <div
                    className={classNames(
                        'relative -translate-x-1/2 top-[90%] h-3 w-3 rounded-full',
                        'bg-primary-default transition-all duration-750',
                        !activePosition && 'hidden',
                    )}
                    style={{ left: activePosition }}
                />
            </div>

            <button
                className={classNames(
                    'fixed bottom-[2.5rem] -translate-x-1/2 left-1/2 rounded-full bg-default-white transition-all',
                    'flex justify-center items-center z-[30] scale-100 hover:scale-125 ',
                )}
                onClick={() => setIsActiveMenu(!isActiveMenu)}
            >
                <div className="rounded-full bg-default-black p-2 transition-all hover:bg-vibrant-prompt-reversed [&>svg]:fill-default-white">
                    <IoIosCamera size="2rem" />
                </div>
            </button>
            {
                headerLinks.length && headerLinks.map((
                    {
                        link,
                        icon,
                        isDisabled,
                        label,
                    },
                ) => {
                    if (!link) {
                        return null;
                    }
                    return (
                        <HeaderNavigationLink
                            key={link}
                            link={link}
                            icon={icon}
                            isDisabled={isDisabled}
                            label={label}
                        />
                    );
                })
            }
        </footer>
    );
};
