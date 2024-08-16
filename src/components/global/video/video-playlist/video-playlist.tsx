'use client';

import React, { FC } from 'react';

// Components
import { VideoPlaylistRow, VideoPlaylistRowProps } from '@/components/global/video/video-playlist-row';
import { ScrollWrapper } from '@/components/global/scrollbar';

// Types
type VideoPlaylistRowOmittedProps = Omit<VideoPlaylistRowProps, 'href'>;

export interface VideoPlaylistProps {
    data: VideoPlaylistRowOmittedProps[],
}

export const VideoPlaylist: FC<VideoPlaylistProps> = ({ data }) => (
    <ScrollWrapper
        className="h-80 w-full rounded-lg bg-system-default-tint-3 lg:h-[32.25rem] lg:w-96"
    >
        <div className="flex h-full w-full flex-col">
            {data.map((item: VideoPlaylistRowOmittedProps) => (
                <VideoPlaylistRow
                    backgroundImage={item.backgroundImage}
                    copy={item.copy}
                    duration={item.duration}
                    heading={item.heading}
                    href={`lessons/${item.id}`}
                    id={item.id}
                    isActive={item.isActive}
                    key={item.id}
                />
            ))}
        </div>
    </ScrollWrapper>
);

