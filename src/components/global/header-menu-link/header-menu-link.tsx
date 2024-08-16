import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

// Types
export interface HeaderMenuLinkProps {
    link: string,
    label: string,
}

export const HeaderMenuLink:React.FC<HeaderMenuLinkProps> = ({
    link,
    label,
}) => {
    // Navigation
    const pathname = usePathname();

    // Memoized
    const isActive = useMemo(() => {
        if (link === pathname.split('/')[1]) {
            console.log(link);
        }
        return link === pathname.split('/')[1];
    }, [link, pathname]);

    return (
        <div className="relative mx-3 flex w-max items-center text-sm font-bold hover:text-primary-default">
            <Link
                className={classNames(
                    'h-[1.875rem] flex items-center',
                    isActive && 'text-primary-default',
                )}
                href={link}
            >
                {label}
            </Link>
            <div
                className={classNames(
                    'absolute left-0 -bottom-[1.125rem]',
                    'w-full h-[0.1875rem] rounded-t bg-primary-default',
                    isActive ? 'text-primary-default block' : 'hidden',
                )}
            />
        </div>
    );
};

