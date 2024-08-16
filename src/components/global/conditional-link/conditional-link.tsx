import React, { ReactNode } from 'react';
import Link from 'next/link';

// Types
interface ConditionalLinkProps {
    children: ReactNode,
    classes?: string,
    href?: string,
}

export const ConditionalLink = ({
    children,
    classes = '',
    href,
}: ConditionalLinkProps) => (
    href ? (
        <Link className={classes} href={href}>
            {children}
        </Link>
    ) : (
        <div className={classes}>
            {children}
        </div>
    )
);
