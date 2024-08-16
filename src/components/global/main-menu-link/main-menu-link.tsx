import React, { useMemo } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface MainMenuLinkProps {
    copy: string,
    link?: string,
    isSubLink?: boolean,
}

export const MainMenuLink: React.FC<MainMenuLinkProps> = ({
    copy,
    link = '',
    isSubLink = false,
}) => {
    // Navigation
    const pathname = usePathname();

    // Memoized
    const isActive = useMemo(() => pathname.includes(link), [link, pathname]);

    return (
        <div
            className={classNames(
                'text-xs py-2',
                isSubLink ? 'font-medium' : 'font-bold',
                isActive && !!link && 'text-primary-default',
            )}
        >
            {
                isActive || !link
                    ? (
                        <div
                            className={classNames(
                                'select-none px-3',
                                !!link && 'underline',
                            )}
                        >
                            {copy}
                        </div>
                    )
                    : (
                        <Link className="px-3 py-1 hover:text-primary-default" href={link}>
                            {copy}
                        </Link>
                    )
            }
        </div>
    );
};
