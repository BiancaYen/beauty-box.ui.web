import React, { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

// Components
import { BookmarkAction } from '@/components/global/bookmark-action';

// Types
interface CardWithBookmarkProps {
    children: ReactNode,
    classes?: {
        bookmark?: string,
        wrapper?: string,
    },
    hasBookmark?: boolean,
    id: string,
    isActive?: boolean,
}

export const CardWithBookmark: FC<CardWithBookmarkProps> = ({
    children,
    classes = {
        bookmark: '',
        wrapper: '',
    },
    hasBookmark = false,
    id,
    isActive = false,
}) => {
    if (hasBookmark) {
        return (
            <div
                className={
                    twMerge(
                        'relative inline-block h-auto w-full',
                        classes.wrapper,
                    )
                }
            >
                <BookmarkAction
                    className={twMerge(
                        'absolute right-1.5 top-1.5',
                        classes.bookmark,
                    )}
                    isActive={isActive}
                    id={id}
                />
                {children}
            </div>
        );
    }
    return (
        <div className={classes.wrapper}>
            {children}
        </div>
    );
};

