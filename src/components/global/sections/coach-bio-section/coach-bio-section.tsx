import classNames from 'classnames';
import Image from 'next/image';
import parse from 'html-react-parser';
import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

// Components
import { ButtonSecondary } from '@/components/global/button-secondary';
import { IconTag } from '@/components/global/tag/icon-tag';
import { SectionHeading6 } from '@/components/global/section-heading-6';
import { VideoPlayer } from '@/components/global/video/video-player';

// Icons
import {
    BookmarkIcon,
    BookmarkOutlinedIcon,
    ClockIcon,
    PlaybookIcon,
    PlaylistIcon,
} from '@/components/icons';

// Types
interface CoachBioSectionProps {
    backgroundImage: {
        alt: string,
        src: string,
    },
    book: string,
    bookmarkButtonCopy: {
        active: string,
        inactive: string,
    },
    category: string,
    coach: string,
    courseTotalTime: number | string,
    description: string,
    isBookmarkActive: boolean,
    isFirstSection?: boolean,
    lessonCount: number | string,
    thumbnailImage: {
        alt: string,
        src: string,
    },
    videoSrc: string,
}

export const CoachBioSection: React.FC<CoachBioSectionProps> = ({
    backgroundImage,
    book,
    bookmarkButtonCopy,
    category,
    coach,
    courseTotalTime,
    description,
    isBookmarkActive,
    isFirstSection = false,
    lessonCount = 0,
    thumbnailImage,
    videoSrc = '',
}) => {
    const {
        alt: backgroundImageAlt,
        src: backgroundImageSrc,
    } = backgroundImage;

    const {
        active: bookmarkButtonCopyActive,
        inactive: bookmarkButtonCopyInactive,
    } = bookmarkButtonCopy;

    const isMobile = useMediaQuery('(max-width: 1023px)');

    const handleBookmarkToggle = () => {
        // todo: Add a request to the API
    };

    return (
        <section
            className={classNames(
                'bg-default-white overflow-hidden',
                !isMobile && 'flex flex-row w-full',
            )}
        >
            <div
                className={classNames(
                    'relative',
                    !isMobile && !!videoSrc && 'basis-1/2',
                )}
            >
                {backgroundImageSrc && isMobile && (
                    <div
                        className={classNames(
                            'absolute w-full max-w-[33rem] xs:w-[80%] right-0 z-auto',
                            isFirstSection ? 'top-0' : '-top-7',
                        )}
                    >
                        <Image
                            className="h-auto w-full"
                            alt={backgroundImageAlt}
                            src={backgroundImageSrc}
                            width={255}
                            height={325}
                        />
                        <div className="absolute inset-x-0 bottom-0 z-[1] h-full w-full bg-gradient-to-t from-default-white to-default-white/70" />
                    </div>
                )}
                <div
                    className={classNames(
                        'relative z-[3]',
                        isFirstSection ? 'pt-9' : 'pt-2',
                        isMobile ? 'px-5 pb-5' : 'pb-[3.125rem] pl-[5.625rem] pr-4',
                    )}
                >
                    <SectionHeading6
                        classes={{
                            wrapper: 'mb-4 pt-10',
                            heading: 'truncate md:w-[80%]',
                        }}
                        subheading={category}
                        heading={isMobile ? coach : coach.replace(/<br\/>/g, '')}
                    />
                    <div className="mb-2.5 flex gap-1.5">
                        <IconTag copy={lessonCount} iconLeft={<PlaylistIcon />} />
                        <IconTag copy={`${courseTotalTime} min`} iconLeft={<ClockIcon />} />
                        <IconTag copy={book} iconLeft={<PlaybookIcon />} />
                    </div>
                    { isMobile && (
                        <VideoPlayer
                            className="-mx-1 mb-2.5 flex justify-center xs:mx-0 md:max-w-[31rem]"
                            id="1"
                            hasRoundedCorners
                            thumbnailImage={thumbnailImage}
                            videoSrc={videoSrc}
                        />
                    )}
                    <p
                        className={classNames(
                            'text-justify text-xs',
                            isMobile ? 'mb-2.5' : 'mb-5',
                        )}
                    >
                        {parse(description)}
                    </p>
                    <div className="relative z-[3]">
                        <ButtonSecondary
                            classes={{ wrapper: 'w-[8.5rem]' }}
                            icon={isBookmarkActive ? BookmarkIcon : BookmarkOutlinedIcon}
                            onClick={handleBookmarkToggle}
                        >
                            {isBookmarkActive ? bookmarkButtonCopyActive : bookmarkButtonCopyInactive}
                        </ButtonSecondary>
                    </div>
                    {isMobile && (
                        <div className="absolute inset-x-0 bottom-0 z-[2] h-20 w-full bg-gradient-to-t from-default-white to-default-white/0" />
                    )}
                </div>
            </div>
            {!isMobile && (
                <div
                    className={classNames(
                        'flex pb-[1.875rem] pr-[5.625rem] pl-4 h-full w-full basis-1/2 justify-center items-center',
                        isFirstSection ? 'pt-[4.375rem]' : 'pt-[1.875rem]',
                    )}
                >
                    <VideoPlayer
                        id="1"
                        hasRoundedCorners
                        thumbnailImage={thumbnailImage}
                        videoSrc={videoSrc}
                    />
                </div>
            )}
        </section>
    );
};
