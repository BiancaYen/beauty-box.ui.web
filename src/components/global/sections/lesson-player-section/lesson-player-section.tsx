'use client';

import React, { FC, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Router from 'next/router';

// Components
import { DownloadMasterbookButton } from '@/components/global/download-masterbook-button';
import { PlaylistControls } from '@/components/global/playlist-controls';
import { SectionHeading4 } from '@/components/global/section-heading-4';
import {
    VideoActions,
    VideoActionBookmarkCopyProps,
    VideoActionCompleteCopyProps,
} from '@/components/global/video-actions';
import { VideoPlayer } from '@/components/global/video/video-player';
import { VideoPlaylist, VideoPlaylistProps } from '@/components/global/video/video-playlist';

// Types
interface LessonPlayerSectionProps {
    book: string,
    bookmarkCopy: VideoActionBookmarkCopyProps,
    coach: string,
    completeCopy: VideoActionCompleteCopyProps,
    courseName: string,
    isBookmarkActive: boolean,
    isCompleted: boolean,
    lessonDescription: string,
    lessonDownloadLink: string,
    lessonId: string,
    lessonName: string,
    nextLessonId: string,
    playlist: VideoPlaylistProps['data'],
    thumbnailImage: {
        alt: string,
        src: string,
    },
    videoSrc: string,
}

export const LessonPlayerSection: FC<LessonPlayerSectionProps> = ({
    book,
    bookmarkCopy,
    coach,
    completeCopy,
    courseName,
    isBookmarkActive,
    isCompleted,
    lessonDescription,
    lessonDownloadLink,
    lessonId,
    lessonName,
    nextLessonId,
    playlist,
    thumbnailImage,
    videoSrc,
}) => {
    // Media Query
    const isMobile = useMediaQuery('(max-width: 1023px)');

    // State
    const [isAutoplayActive, setIsAutoplayActive] = useState(false);

    // Handlers
    const handleBookmarkClick = () => {
        // TODO: Handle bookmark action here
        const bookmarkAction = '';
        return bookmarkAction;
    };

    const handleCompletedClick = () => {
        // TODO: Handle watched action here
        const completedAction = '';
        return completedAction;
    };

    const handleVideoEnd = () => {
        if (isAutoplayActive) {
            return Router.push(`lessons/${nextLessonId}`);
        }
        return null;
    };

    return (
        <section className="lg:flex lg:justify-center lg:gap-11">
            <div>
                <SectionHeading4
                    className="mb-2 ml-5 mt-7 lg:ml-0"
                    heading={courseName}
                    headingPosition="bottom"
                    subheading={coach}
                />

                <div className="lg:w-[46rem]">
                    <VideoPlayer
                        {...!isMobile && { hasRoundedCorners: true }}
                        id={lessonId}
                        isAutoPlay
                        thumbnailImage={thumbnailImage}
                        videoSrc={videoSrc}
                        onCompleted={handleVideoEnd}
                    />
                </div>

                <SectionHeading4
                    className="ml-5 mt-3 lg:ml-0"
                    heading={lessonName}
                    headingSize="small"
                    subheading={lessonDescription}
                />

                <VideoActions
                    {...!isMobile && { book, lessonDownloadLink }}
                    bookmarkCopy={bookmarkCopy}
                    isBookmarkActive={isBookmarkActive}
                    isCompleted={isCompleted}
                    completeCopy={completeCopy}
                    onBookmarkClick={handleBookmarkClick}
                    onCompletedClick={handleCompletedClick}
                />
            </div>

            <div className=" lg:mt-8">
                <PlaylistControls
                    count={playlist.length}
                    isAutoplay={isAutoplayActive}
                    onChange={() => setIsAutoplayActive(!isAutoplayActive)}
                />

                <VideoPlaylist
                    data={playlist}
                />
            </div>

            {isMobile && (
                <DownloadMasterbookButton
                    book={book}
                    classes={{
                        wrapper: 'my-5',
                    }}
                    lessonDownloadLink={lessonDownloadLink}
                />
            )}
        </section>
    );
};
