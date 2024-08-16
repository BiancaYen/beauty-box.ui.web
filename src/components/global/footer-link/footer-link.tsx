'use client';

import classNames from 'classnames';
import React, { AnchorHTMLAttributes, FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface FooterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    copy: string,
    href: string,
}

const FooterLink: FC<FooterLinkProps> = ({
    copy,
    href,
}) => {
    // Router
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link
            className={classNames(
                'hover:underline active:underline',
                isActive ? 'font-bold' : '',
            )}
            href={href}
        >
            {copy}
        </Link>
    );
};

export default FooterLink;
