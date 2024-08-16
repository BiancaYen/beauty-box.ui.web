'use client';

import React, { FC } from 'react';

// Components
import { BookmarkCircleIcon, BookmarkCircleOutlinedIcon } from '@/components/icons';
import { IconButton } from '@/components/global/icon-button';

// Types
interface BookmarkActionProps {
    className?: string,
    id: string,
    isActive: boolean,
}

export const BookmarkAction: FC<BookmarkActionProps> = ({
    className = '',
    id,
    isActive,
}) => {
    const handleBookmarkClick = () => {
        const action = `${id} handle action`;
        return action;
    };

    return (
        <IconButton
            className={`z-50 hover:!bg-[transparent] ${className}`}
            onClick={handleBookmarkClick}
        >
            {isActive
                ? <BookmarkCircleIcon />
                : <BookmarkCircleOutlinedIcon />}

        </IconButton>
    );
};

