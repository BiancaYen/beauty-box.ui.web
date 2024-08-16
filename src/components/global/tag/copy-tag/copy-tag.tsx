import React, { FC } from 'react';
import { TagLayout, TagVariants } from '../layout/layout';

// Types
interface CopyTagProps {
    className?: string,
    copy: string | number,
    isActive?: boolean,
    variant?: TagVariants,
}

export const CopyTag: FC<CopyTagProps> = ({
    className,
    copy,
    isActive,
    variant = TagVariants.primary,
}) => (
    <TagLayout
        className={className}
        isActive={isActive}
        variant={variant}
    >
        {copy}
    </TagLayout>
);
