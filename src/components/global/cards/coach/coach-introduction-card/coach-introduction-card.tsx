import classNames from 'classnames';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

// Components
import { CardWithBookmark } from '@/components/global/cards/card-with-bookmark';
import { CoachCardLayout } from '@/components/global/cards/coach/layouts/coach-card-layout';
import { CoachTagsWithRedirect } from '@/components/global/coach-tags-with-redirect';
import { CoachWithCategory } from '@/components/global/coach-with-category';

// Utils
import { truncateCopy } from '@/utils/truncate-copy';

// Types
export interface CoachIntroductionCardProps {
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
    categoryId: string | number,
    coach: string,
    courseTotalTime: number,
    description: string,
    id: string,
    isBookmarkActive?:boolean,
    lessonCount: number,
    link: string,
    redirectCopy: string,
    subcategory: string,
    subheading: string,
}

export const CoachIntroductionCard = ({
    backgroundImage,
    backgroundImageHover,
    book,
    categoryColor,
    coach,
    courseTotalTime,
    description,
    id,
    isBookmarkActive,
    lessonCount,
    link,
    redirectCopy,
    subcategory,
    subheading,
}: CoachIntroductionCardProps) => {
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
                link={link}
            >
                {isHovering && <span className="bg-defaultWhite absolute bottom-[-3px] left-0 h-[0.313rem] w-full" /> }

                <span
                    className="absolute left-0 top-0 z-10 h-full w-full"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseOut={() => setIsHovering(false)}
                    onFocus={() => setIsHovering(true)}
                    onBlur={() => setIsHovering(false)}
                />

                <div
                    className={twMerge(classNames(
                        'flex flex-col items-end gap-1 p-4 pb-3 text-right tracking-wide',
                        isHovering && 'relative h-[10.5rem] p-0 justify-between pr-4',
                    ))}
                >
                    <CoachWithCategory
                        category={subcategory}
                        coach={coach}
                    />

                    <div
                        className={twMerge(classNames(
                            'flex flex-col gap-1 self-end text-left',
                            isHovering && 'self-start',
                        ))}
                    >
                        {isHovering
                            ? (
                                <CoachTagsWithRedirect
                                    book={book}
                                    courseTotalTime={courseTotalTime}
                                    lessonCount={lessonCount}
                                    redirectCopy={redirectCopy}
                                />
                            )
                            : (
                                <>
                                    <p className="w-60 truncate text-xs font-bold">{subheading}</p>
                                    <p className="text-xxs leading-4">{truncateCopy(235, description)}</p>
                                </>
                            )}
                    </div>
                </div>
            </CoachCardLayout>
        </CardWithBookmark>
    );
};

