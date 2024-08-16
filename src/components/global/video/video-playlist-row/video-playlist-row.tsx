'use client';

import classNames from 'classnames';
import Link from 'next/link';
import React, { FC } from 'react';

// Icons
import { PlayIcon } from '@/components/icons';

// Components
import { ContentCard } from '@/components/global/cards/content/content-card';

// Types
export interface VideoPlaylistRowProps {
    backgroundImage: {
        alt: string,
        src: string,
    },
    copy: string,
    href: string,
    duration: string,
    heading: string,
    id: string,
    isActive: boolean,
}

export const VideoPlaylistRow: FC<VideoPlaylistRowProps> = ({
    backgroundImage,
    copy = '',
    href,
    duration = '0:00',
    heading = '',
    id,
    isActive = false,
}) => (
    <Link
        className={classNames(
            'h-full p-2 flex items-center w-[calc(100%+0.25rem)]',
            isActive ? 'bg-default-white' : ' active:scale-[99%] cursor-pointer hover:bg-primary-tint-2',
        )}
        href={href}
        role="button"
        tabIndex={0}
    >
        <div
            className="ml-2 flex w-full items-start justify-start gap-3"
        >
            <ContentCard
                backgroundImage={backgroundImage}
                classes={{
                    wrapper: '!h-[4.25rem] !w-[7.5rem] rounded-lg [&>img]:rounded-lg',
                    image: !isActive ? 'opacity-50' : '',
                    tags: {
                        right: '!bottom-[2px] !right-[2.5px] !h-5',
                    },
                }}
                tags={{
                    right: {
                        copy: duration,
                        iconLeft: <PlayIcon />,
                    },
                }}
                id={id}
            />
            <div
                className="w-full"
            >
                <h2
                    className="text-xxs font-semibold text-system-default-default"
                >
                    {heading}
                </h2>
                <p
                    className="text-min"
                >
                    {copy}
                </p>
            </div>
        </div>
    </Link>
);
