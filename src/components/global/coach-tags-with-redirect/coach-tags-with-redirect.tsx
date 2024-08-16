'use client';

import classNames from 'classnames';
import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

// Components
import { CoachTags } from '@/components/global/coach-tags';
import { RedirectInfo } from '@/components/global/cards/coach/layouts/redirect-info';

// Types
interface CoachTagsWithRedirectProps {
    book: string,
    classes?: {
        wrapper?: string,
    },
    courseTotalTime: number,
    lessonCount: number,
    redirectCopy: string,
}

export const CoachTagsWithRedirect: FC<CoachTagsWithRedirectProps> = ({
    book,
    classes,
    courseTotalTime,
    lessonCount,
    redirectCopy,
}) => (
    <div
        className={
            twMerge(
                classNames(
                    'ml-4 mb-3 flex flex-col items-start justify-center gap-2',
                ),
                classes?.wrapper,
            )
        }
    >
        <CoachTags
            book={book}
            classes={{
                wrapper: 'flex-wrap w-[7.5rem]',
            }}
            courseTotalTime={courseTotalTime}
            lessonCount={lessonCount}
        />

        <RedirectInfo copy={redirectCopy} />
    </div>
);
