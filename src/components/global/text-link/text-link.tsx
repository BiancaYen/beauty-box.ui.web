import React, {
    FC,
    ReactNode,
} from 'react';
import Link from 'next/link';

interface TextLinkProps {
    children: ReactNode,
    className?: string,
    href: string,
}

export const TextLink: FC<TextLinkProps> = ({
    children,
    className,
    href,
}) => (
    <Link href={href}>
        <span className={`cursor-pointer text-xxs font-bold text-primary-default transition-opacity hover:underline hover:opacity-80 ${className}`}>
            {children}
        </span>
    </Link>
);
