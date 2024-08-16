import React, {
    FC,
    ReactNode,
} from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

// Components
import { ConditionalLink } from '@/components/global/conditional-link';
import { CopyTag, IconTag } from '@/components/global/tag';
import { CardWithBookmark } from '@/components/global/cards/card-with-bookmark';
import { VideoProgress } from '@/components/global/video/video-progress';

// Types
export interface ContentCardProps {
    backgroundImage: {
        alt: string,
        src: string,
    },
    classes?: {
        bookmarkWrapper?: string,
        wrapper?: string,
        image?: string,
        tags?:{
            left?: string,
            right?: string,
        },
    },
    hasHover?: boolean,
    id: string,
    isBookmarkActive?: boolean,
    isCompleted?: boolean,
    link?: string,
    progress?: null | number,
    tags?: {
        left?: {
            copy? : string,
        },
        right?: {
            copy?: string | number,
            iconLeft?: ReactNode,
            iconRight?: ReactNode,
        },
    },
}

export const ContentCard: FC<ContentCardProps> = ({
    backgroundImage,
    classes,
    hasHover = false,
    id,
    isBookmarkActive,
    isCompleted = false,
    link = '',
    progress = null,
    tags,
}) => {
    const {
        alt: backgroundImageAlt,
        src: backgroundImageSrc,
    } = backgroundImage;

    const hasBookmark = isBookmarkActive !== undefined;

    return (
        <CardWithBookmark
            hasBookmark={hasBookmark}
            classes={{
                wrapper: classes?.bookmarkWrapper,
            }}
            {...hasBookmark && {
                isActive: isBookmarkActive,
            }}
            id={id}
        >
            <ConditionalLink classes="w-full h-full" href={`${link}/${id}`}>
                <div
                    className={twMerge(classNames(
                        'w-full h-full border-2 border-transparent relative rounded-2xl [&>div>img]:rounded-2xl overflow-hidden',
                        hasHover && 'hover:border-defaultBlack',
                        classes?.wrapper,
                    ))}
                >
                    <Image
                        alt={backgroundImageAlt}
                        className={classNames(
                            isCompleted && 'opacity-60 bg-defaultWhite',
                            classes?.image,
                        )}
                        layout="fill"
                        src={backgroundImageSrc}
                    />

                    {!isCompleted && progress && (
                        <VideoProgress progress={progress} />
                    )}

                    {tags?.left?.copy && (
                        <CopyTag
                            className={classNames(
                                'absolute left-1.5 top-1.5 w-10',
                                !isCompleted && 'opacity-90',
                                classes?.tags?.left,
                            )}
                            copy={tags?.left?.copy}
                            isActive={!isCompleted}
                        />
                    )}

                    {tags?.right?.copy && (
                        <IconTag
                            classes={{
                                wrapper: classNames(
                                    'absolute bottom-1.5 right-1.5',
                                    !isCompleted && 'opacity-90',
                                    classes?.tags?.right,
                                ),
                            }}
                            copy={tags?.right?.copy}
                            iconLeft={tags?.right?.iconLeft}
                            iconRight={tags?.right?.iconRight}
                            isActive={!isCompleted}
                        />
                    )}
                </div>
            </ConditionalLink>
        </CardWithBookmark>
    );
};

