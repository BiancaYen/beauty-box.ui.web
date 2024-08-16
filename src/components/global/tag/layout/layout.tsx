import React, { FC } from 'react';
import classNames from 'classnames';

// Types
export enum TagVariants {
    primary = 'primary',
    secondary = 'secondary',
}

interface TagLayoutProps {
    children: React.ReactNode,
    className?: string,
    isActive?: boolean,
    variant?: TagVariants,
}

export const TagLayout: FC<TagLayoutProps> = ({
    children,
    className,
    isActive = true,
    variant = TagVariants.primary,
}) => (
    <span
        className={classNames(
            'w-fit flex items-center px-1.5 py-1 text-sm rounded-full h-4 text-default-white uppercase',
            variant === TagVariants.primary && 'bg-primary-default',
            variant === TagVariants.secondary && 'bg-system-default-default',
            'opacity-80',
            className,
        )}
    >
        {children}
    </span>
);

export default TagLayout;
