import React, { useState } from 'react';
import parser from 'html-react-parser';

// Components
import { CardWithBookmark } from '@/components/global/cards/card-with-bookmark';
import { CoachCardLayout } from '@/components/global/cards/coach/layouts/coach-card-layout';
import { CoachTagsWithRedirect } from '@/components/global/coach-tags-with-redirect';

// Types
export interface CoachCardProps {
    backgroundImage: {
        alt: string,
        src: string,
    },
    backgroundImageHover: {
        alt: string,
        src: string,
    },
    book: string,
    categoryColor: string,
    coach: string,
    courseTotalTime: number,
    id: string,
    isBookmarkActive?:boolean,
    lessonCount: number,
    link: string,
    redirectCopy: string,
    subcategory: string,
}

export const CoachCard = ({
    backgroundImage,
    backgroundImageHover,
    book,
    categoryColor,
    coach,
    courseTotalTime,
    id,
    isBookmarkActive,
    lessonCount,
    link,
    redirectCopy,
    subcategory,
}: CoachCardProps) => {
    const hasBookmark = isBookmarkActive !== undefined;
    const [isHovering, setIsHovering] = useState(false);

    return (
        <CardWithBookmark
            classes={{
                wrapper: 'w-max mt-6',
            }}
            hasBookmark={hasBookmark}
            {...hasBookmark && {
                isActive: isBookmarkActive,
            }}
            id={id}
        >
            <CoachCardLayout
                backgroundImage={isHovering ? backgroundImageHover : backgroundImage}
                categoryColor={categoryColor}
                classes={{
                    wrapper: '!w-[11.25rem] !h-[15.625rem]',
                }}
                link={link}
            >
                <span
                    className="absolute left-0 top-0 z-10 h-full w-full"
                    onBlur={() => setIsHovering(false)}
                    onFocus={() => setIsHovering(true)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseOut={() => setIsHovering(false)}
                />

                { isHovering
                    ? (
                        <CoachTagsWithRedirect
                            book={book}
                            classes={{ wrapper: 'ml-3' }}
                            courseTotalTime={courseTotalTime}
                            lessonCount={lessonCount}
                            redirectCopy={redirectCopy}
                        />
                    )
                    : (
                        <div className="mb-3 ml-4">
                            <p className="mb-2 truncate text-sm font-bold underline">
                                {subcategory}
                            </p>
                            <p className="truncate text-base font-bold">
                                {parser(coach)}
                            </p>
                        </div>
                    )}
            </CoachCardLayout>
        </CardWithBookmark>
    );
};

