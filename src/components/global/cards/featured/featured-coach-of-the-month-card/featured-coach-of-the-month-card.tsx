import Image from 'next/image';
import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useMediaQuery } from 'usehooks-ts';

// Components
import { BookmarkAction } from '@/components/global/bookmark-action';
import { ButtonLink } from '@/components/global/button-link';
import { CardWithBookmark } from '@/components/global/cards/card-with-bookmark';

// Icons
import { CaretRightIcon } from '@/components/icons';

export interface FeaturedCoachOfTheMonthCardProps {
    backgroundImage: {
        alt: string,
        src: string,
    },
    backgroundImageDesktop: {
        alt: string,
        src: string,
    },
    category: string,
    coach: string,
    coachImage: {
        alt: string,
        src: string,
    },
    coachImageDesktop: {
        alt: string,
        src: string,
    },
    coachNameColor: string,
    description: string,
    heading: string,
    id: string,
    isBookmarkActive: boolean,
    link: string,
    linkCopy: string,
    subheading: string,
}

export const FeaturedCoachOfTheMonthCard: FC<FeaturedCoachOfTheMonthCardProps> = ({
    backgroundImage,
    backgroundImageDesktop,
    category,
    coach,
    coachImage,
    coachImageDesktop,
    coachNameColor,
    description,
    heading,
    id,
    isBookmarkActive,
    link,
    linkCopy,
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
        alt: coachImageAlt,
        src: coachImageSrc,
    } = coachImage;

    const {
        alt: coachImageDesktopAlt,
        src: coachImageDesktopSrc,
    } = coachImageDesktop;

    const isMobile = useMediaQuery('(max-width: 1023px)');
    const hasBookmark = isBookmarkActive !== undefined;

    return (
        <CardWithBookmark
            hasBookmark={hasBookmark && isMobile}
            {...hasBookmark && {
                isActive: isBookmarkActive,
            }}
            id={id}
        >
            <article
                className="relative flex overflow-hidden bg-exceptions-cardTag text-default-white lg:h-[24.5rem]"
            >
                <div
                    className={twMerge(
                        'z-[2] flex w-full flex-col items-start justify-start lg:flex-row lg:justify-between lg:to-transparent',
                        'bg-gradient-to-bl from-[rgba(0,0,0,0)] from-30% to-defaultBlack to-85%',
                    )}
                >
                    <div className="px-4 pt-4 lg:ml-20 lg:mt-10 lg:px-0 lg:pt-0">
                        <h2 className="mt-1 text-base font-bold uppercase leading-tight lg:mt-0 lg:text-2xl">
                            {heading}
                        </h2>

                        <div className="mt-10 flex flex-col gap-1 lg:mt-[5.375rem]">
                            <p className="text-sm font-bold leading-tight">
                                {category}
                            </p>
                            <h3
                                className="w-52 text-4xl font-bold leading-10"
                                style={{
                                    color: coachNameColor,
                                }}
                            >
                                {coach}
                            </h3>
                        </div>
                    </div>

                    <div
                        className={twMerge(
                            'mt-5 flex flex-col items-start gap-5 self-end lg:mb-6 lg:mr-60 lg:mt-10 lg:gap-6 lg:self-center px-4 lg:px-0 pb-4 lg:pb-0',
                            'bg-gradient-to-b from-[rgba(0,0,0,0)] from-0% to-defaultBlack to-30% lg:to-transparent',
                        )}
                    >
                        <h4 className="text-base font-bold uppercase leading-tight">
                            {subheading}
                        </h4>
                        <p className="text-justify text-xs leading-4 lg:w-[23.125rem]">
                            {description}
                        </p>

                        <div className="w-[90%] self-center lg:flex lg:w-full lg:items-center lg:justify-start lg:gap-2 lg:self-start">
                            <ButtonLink
                                classes={{
                                    wrapper: 'w-full lg:w-[16.875rem]',
                                }}
                                href={`${link}/${id}`}
                                icon={CaretRightIcon}
                            >
                                <span>{linkCopy}</span>
                            </ButtonLink>
                            {!isMobile && isBookmarkActive && hasBookmark && (
                                <BookmarkAction
                                    id={id}
                                    isActive={isBookmarkActive}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <Image
                    alt={isMobile ? backgroundImageAlt : backgroundImageDesktopAlt}
                    className="z-[1]"
                    src={isMobile ? backgroundImageSrc : backgroundImageDesktopSrc}
                    fill
                />

                <div className="absolute bottom-0 left-0 flex h-full w-full justify-end max-[360px]:left-16 max-[360px]:top-6 sm:left-0 sm:top-[unset] lg:justify-start">
                    <div className="relative aspect-[40/43] h-full lg:aspect-[160/49]">
                        <Image
                            alt={isMobile ? coachImageAlt : coachImageDesktopAlt}
                            className="z-[1] max-[360px]:scale-90 sm:scale-100"
                            src={isMobile ? coachImageSrc : coachImageDesktopSrc}
                            fill
                        />
                    </div>

                    {isMobile && (
                        <>
                            <span
                                className="absolute bottom-[30%] h-[35%] w-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0),#000_99%)]"
                            />
                            <span
                                className="bg-defaultBlack absolute bottom-0 left-0 h-[30%] w-full"
                            />
                        </>
                    )}

                </div>
            </article>
        </CardWithBookmark>
    );
};
