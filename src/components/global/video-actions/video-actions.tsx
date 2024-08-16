'use client';

import React, { FC } from 'react';

// Icons
import {
    BookmarkIcon,
    BookmarkOutlinedIcon,
    CheckIcon,
    CheckOutlinedIcon,
} from '@/components/icons';

// Components
import { ButtonSecondary } from '@/components/global/button-secondary';
import { DownloadMasterbookButton } from '@/components/global/download-masterbook-button';

// Types
export interface VideoActionBookmarkCopyProps {
    active: string,
    inactive: string,
}

export interface VideoActionCompleteCopyProps {
    completed: string,
    incomplete: string,
}

interface VideoActionsProps {
    book?: string,
    bookmarkCopy: VideoActionBookmarkCopyProps,
    completeCopy: VideoActionCompleteCopyProps,
    isBookmarkActive: boolean,
    isCompleted: boolean,
    lessonDownloadLink?: string,
    onBookmarkClick: () => void,
    onCompletedClick: () => void,
}

export const VideoActions: FC<VideoActionsProps> = ({
    book,
    bookmarkCopy,
    completeCopy,
    isBookmarkActive,
    isCompleted,
    lessonDownloadLink,
    onBookmarkClick,
    onCompletedClick,
}) => {
    const {
        active: bookmarkCopyActive,
        inactive: bookmarkCopyInactive,
    } = bookmarkCopy;

    const {
        completed: completeCopyCompleted,
        incomplete: completeCopyIncomplete,
    } = completeCopy;

    return (
        <div
            className="my-5 flex w-full items-center justify-center gap-2 lg:justify-start"
        >
            <ButtonSecondary
                icon={isBookmarkActive ? BookmarkIcon : BookmarkOutlinedIcon}
                iconFill={isBookmarkActive ? '' : 'var(--color-primaryDefault)'}
                iconHeight="10"
                iconWidth="10"
                onClick={onBookmarkClick}
            >
                {isBookmarkActive ? bookmarkCopyActive : bookmarkCopyInactive}
            </ButtonSecondary>
            <ButtonSecondary
                icon={isCompleted ? CheckIcon : CheckOutlinedIcon}
                iconFill={isCompleted ? '' : 'var(--color-primaryDefault)'}
                onClick={onCompletedClick}
            >
                {isCompleted ? completeCopyCompleted : completeCopyIncomplete}
            </ButtonSecondary>

            {book && lessonDownloadLink && (
                <DownloadMasterbookButton
                    book={book}
                    classes={{
                        wrapper: 'w-auto',
                    }}
                    lessonDownloadLink={lessonDownloadLink}
                    variant="secondary"
                />
            )}
        </div>
    );
};
