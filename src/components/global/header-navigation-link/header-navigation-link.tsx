import React, {
    ElementType,
    FC, useEffect, useMemo, useState,
} from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isA } from '@jest/expect-utils';
import { headerLinks } from '@/components/global/header/data';

// Types
export interface HeaderNavigationLinkProps {
    link: string,
    icon: ElementType,
    isDisabled?: boolean,
    label: string,
}

export const HeaderNavigationLink: FC<HeaderNavigationLinkProps> = ({
    link,
    icon: Icon,
    isDisabled = false,
    label,
}) => {
    // Navigation
    const pathname = usePathname();

    // Memoized
    const isActive = useMemo(() => link.split('/')[1] === pathname.split('/')[1], [link, pathname]);

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isActive) {
                setIsHovered(false);
            }
        }, 200);
        return () => {
            clearTimeout(timeout);
        };
    }, [isActive]);

    return (
        <div
            className={classNames(
                isActive ? 'justify-start animate-fade-in' : '',
                'flex-1 flex items-center justify-center transition-all ease-in p-3',
            )}
        >
            <Link
                href={link}
                className={classNames(
                    'relative w-[2.5rem] flex items-center justify-center gap-2 transition-all z-20',
                    isActive ? 'animate-bounce-once text-primary-default [&>svg]:text-primary-default [&>svg]:scale-125'
                        : 'text-system-default-tint-2[&>svg]:fill-default-white',
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
            >
                <span className={classNames(
                    'absolute w-full aspect-square rounded-full z-[10] transition-all duration-300',
                        isHovered ? 'bg-primary-tint-2' : 'bg-default-white'
                )}>

                </span>
                <span className="relative z-20">
                    <Icon size="1.2em" />
                </span>
                {/* <span */}
                {/*    className={classNames( */}
                {/*        'text-center text-sm leading-[1] pt-1 font-bold', */}
                {/*        isActive ? 'text-primary-default w-100%' : 'text-transparent w-0', */}
                {/*        isDisabled && 'text-system-default-tint-2', */}
                {/*    )} */}
                {/* > */}
                {/*    {label} */}
                {/* </span> */}
            </Link>
        </div>
    );
};
