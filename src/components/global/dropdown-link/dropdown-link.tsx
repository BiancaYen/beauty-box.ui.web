import React, { useMemo } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface DropdownLinkProps {
    copy: string,
    link: string,
}

// Style
const mainStyle = 'flex h-9 w-full px-8 items-center text-xs font-medium';

export const DropdownLink: React.FC<DropdownLinkProps> = ({
    copy,
    link,
}) => {
    // Navigation
    const pathname = usePathname();

    // Memoized
    const isActive = useMemo(() => pathname.includes(link), [link, pathname]);

    if (isActive) {
        return (
            <div
                className={classNames(
                    'select-none text-primary-default',
                    mainStyle,
                )}
            >
                {copy}
            </div>
        );
    }

    return (
        <Link
            className={classNames(
                'hover:bg-system-default-tint-3',
                mainStyle,
            )}
            href={link}
        >
            {copy}
        </Link>
    );
};

