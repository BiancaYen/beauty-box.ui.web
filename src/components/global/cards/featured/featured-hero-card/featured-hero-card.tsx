import React, { FC } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';
import classNames from 'classnames';
import parse from 'html-react-parser';

// Components
import { BookmarkAction } from '@/components/global/bookmark-action';
import { ButtonLink } from '@/components/global/button-link';
import { CardWithBookmark } from '@/components/global/cards/card-with-bookmark';
import { CoachTags } from '@/components/global/coach-tags';

export interface FeaturedHeroCardProps {
    backgroundImage: {
        alt: string,
        src: string,
    },
    backgroundImageDesktop: {
        alt: string,
        src: string,
    },
    book: string,
    foregroundImage: {
        alt: string,
        src: string,
    },
    foregroundImageDesktop: {
        alt: string,
        src: string,
    },
    courseName: string,
    courseTotalTime: number,
    id: string,
    isBookmarkActive?:boolean,
    lessonCount: number,
    link: string,
    linkCopy: string,
    name: string,
    nameColor: string,
    subheading: string,
}

export const FeaturedHeroCard: FC<FeaturedHeroCardProps> = ({
    backgroundImage,
    backgroundImageDesktop,
    book,
    foregroundImage,
    foregroundImageDesktop,
    courseName,
    courseTotalTime,
    id,
    isBookmarkActive,
    link,
    linkCopy,
    lessonCount,
    name,
    nameColor,
    subheading,
}) => {
    const {
        alt: backgroundImageAlt,
        src: backgroundImageSrc,
    } = backgroundImage;

    const {
        alt: backgroundImageDesktopAlt,
        src: backgroundImageDesktopSrc,
    } = backgroundImageDesktop;

    const {
        alt: foregroundImageAlt,
        src: foregroundImageSrc,
    } = foregroundImage;

    const {
        alt: foregroundImageDesktopAlt,
        src: foregroundImageDesktopSrc,
    } = foregroundImageDesktop;

    const isMobile = useMediaQuery('(max-width: 1023px)');
    const hasBookmark = isBookmarkActive !== undefined;

    return (
        <CardWithBookmark
            classes={{
                bookmark: 'top-[4rem]',
                // Replicate swiper slider styles - important
                wrapper: '!w-full !h-full flex justify-center items-center',
            }}
            hasBookmark={hasBookmark && isMobile}
            {...hasBookmark && {
                isActive: isBookmarkActive,
            }}
            id={id}
        >
            <div
                className="relative flex h-full w-full items-end overflow-hidden tracking-wide lg:justify-end"
            >
                <Image
                    alt={isMobile ? backgroundImageAlt : backgroundImageDesktopAlt}
                    className="z-[1]"
                    fill
                    src={isMobile ? backgroundImageSrc : backgroundImageDesktopSrc}
                />

                <div
                    className={classNames(
                        'absolute bottom-0 right-0 z-[2] h-full w-auto',
                        'sm:scale-[175%] sm:top-24 sm:right-32',
                        'lg:scale-100 lg:top-0 lg:right-60 lg:w-full',
                        'xl:right-0 2xl:left-60 3xl:left-96',
                    )}
                >
                    <div className="relative aspect-[8/9] h-full lg:aspect-[640/191]">
                        <Image
                            alt={isMobile ? foregroundImageAlt : foregroundImageDesktopAlt}
                            className="bottom-0 right-0"
                            fill
                            src={isMobile ? foregroundImageSrc : foregroundImageDesktopSrc}
                        />
                    </div>
                </div>

                <div
                    className={classNames(
                        'z-10 flex w-full h-full flex-col items-center justify-end px-6 text-default-white',
                        'sm:mb-5',
                        'lg:justify-end lg:mr-16 lg:w-auto lg:items-start',
                        '3xl:mr-40',
                    )}
                >
                    <div
                        className={classNames(
                            'w-full',
                            'sm:w-[calc(30rem)] sm:flex sm:flex-col sm:justify-center',
                            'lg:block lg:ml-0 lg:w-full',
                        )}
                    >
                        <div className="sm:self-start">
                            <h1
                                className="w-60 truncate text-left text-4xl font-bold leading-10"
                                style={{
                                    color: nameColor,
                                }}
                            >
                                {parse(name)}
                            </h1>
                            <h2
                                className="mt-3 flex w-52 flex-col truncate text-left text-xxs leading-none tracking-tight text-default-white"
                            >
                                {subheading}
                                <span
                                    className="mt-[0.15rem] text-left text-base font-bold leading-tight"
                                >
                                    {courseName}
                                </span>
                            </h2>

                            <CoachTags
                                book={book}
                                classes={{
                                    wrapper: 'pt-3 pb-4',
                                }}
                                courseTotalTime={courseTotalTime}
                                lessonCount={lessonCount}
                            />
                        </div>

                        <div className="flex w-full items-start justify-center gap-2 lg:w-auto lg:justify-start">
                            <ButtonLink
                                href={`${link}/${id}`}
                                classes={{
                                    wrapper: classNames(
                                        isMobile ? 'mb-5 w-[95%] sm:w-96' : 'mb-12 ',
                                    ),
                                }}
                            >
                                {linkCopy}
                            </ButtonLink>

                            {!isMobile && hasBookmark
                                && (
                                    <BookmarkAction
                                        id={id}
                                        isActive={isBookmarkActive}
                                    />
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </CardWithBookmark>
    );
};
