import { useMediaQuery } from 'usehooks-ts';
import classNames from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';
import parse from 'html-react-parser';

// Components
import { BookmarkAction } from '@/components/global/bookmark-action';
import { Button, ButtonVariant } from '@/components/global/button';
import { CardWithBookmark } from '@/components/global/cards/card-with-bookmark';

// Types
export interface FeaturedLessonCardProps {
    backgroundImageDesktopSrc: string,
    backgroundImageSrc: string,
    buttonCopy: string,
    coachImageSrc: string,
    coachImageDesktopSrc: string,
    copy: string,
    course: string,
    id: string,
    isBookmarkActive?:boolean,
    name: string,
    onClick: () => void,
}

export const FeaturedLessonCard: FC<FeaturedLessonCardProps> = ({
    backgroundImageDesktopSrc,
    backgroundImageSrc,
    buttonCopy,
    coachImageSrc,
    coachImageDesktopSrc,
    copy,
    course,
    id,
    isBookmarkActive,
    name,
    onClick = () => { },
}) => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const hasBookmark = isBookmarkActive !== undefined;

    return (
        <CardWithBookmark
            classes={{
                // Replicate swiper slider styles - important
                wrapper: '!w-full !h-full flex justify-center items-center',
            }}
            hasBookmark={hasBookmark && isMobile}
            isActive={isBookmarkActive}
            id={id}
        >
            <div
                className="relative flex h-full w-full items-end lg:items-center lg:justify-end"
            >
                <Image
                    alt="coach-preview image"
                    className="z-[1]"
                    fill
                    objectFit="cover"
                    src={isMobile ? backgroundImageSrc : backgroundImageDesktopSrc}
                />

                {isMobile
                    && (
                        <div className="absolute right-0 top-0 z-[2] flex h-[70%] w-[70%] justify-end md:right-0 md:h-full md:w-full md:justify-start">
                            <div
                                className={classNames(
                                    'relative aspect-[8/9] md:aspect-square lg:aspect-[128/39]',
                                )}
                            >
                                <Image
                                    alt="Coach Image"
                                    fill
                                    src={isMobile ? coachImageSrc : coachImageDesktopSrc}
                                />
                            </div>
                        </div>
                    )}

                <div
                    className={classNames(
                        'z-10 mt-[9rem] flex w-full flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] from-0% to-default-black to-30%',
                        'md:mb-8 md:mr-5 md:mt-5 md:items-end md:to-[rgba(0,0,0,0)]',
                        'lg:m-0 lg:p-12 xl:p-48',
                    )}
                >
                    <div className="flex w-fit flex-col items-start justify-start px-6 py-5 text-default-white md:w-[50%] md:px-3 lg:px-0">
                        <p
                            className="text-left text-xxs font-thin leading-7 text-default-white opacity-90"
                        >
                            {name}
                            {' '}
                            Teaches
                        </p>
                        <h2
                            className="w-60 truncate text-left text-2xl font-bold uppercase leading-5 md:mb-3 lg:w-80"
                        >
                            {isMobile ? parse(course) : course.replace(/<br\/>/g, '')}
                        </h2>
                        <p className="my-4 text-justify text-xs opacity-90 md:w-[82.5%]">
                            {parse(copy)}
                        </p>
                        <div className={classNames('flex w-full items-start justify-center gap-3 md:w-[80%] py-3 md:justify-start')}>
                            <Button
                                classes={{
                                    wrapper: classNames(
                                        isMobile ? 'w-[95%]' : '',
                                    ),
                                }}
                                variant={ButtonVariant.tertiary}
                                onClick={onClick}
                            >
                                {buttonCopy}
                            </Button>
                            {!isMobile && hasBookmark
                                && (
                                    <BookmarkAction
                                        isActive={isBookmarkActive} id={id}
                                    />
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </CardWithBookmark>
    );
};

