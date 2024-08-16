'use client';

import classNames from 'classnames';
import React, {
    FC,
    Suspense,
    useEffect,
    useRef, useState,
} from 'react';
import ReactPlayer from 'react-player/lazy';
import { twMerge } from 'tailwind-merge';

// Icons
import { PlayCircleIcon } from '@/components/icons';

// Types
export interface VideoPlayerProps {
    className?: string,
    hasRoundedCorners?: boolean,
    id: string,
    isAutoPlay?: boolean,
    progress?: number,
    // Starting with controls removes thumbnail
    startWithControls?: boolean,
    thumbnailImage: {
        alt: string,
        src: string,
    },
    videoSrc: string,
    onCompleted?: () => void,
}

export const VideoPlayer: FC<VideoPlayerProps> = ({
    className,
    hasRoundedCorners = false,
    id,
    isAutoPlay = false,
    progress,
    startWithControls = false,
    thumbnailImage,
    videoSrc,
    onCompleted,
}) => {
    const { src: thumbnailImageSrc = '' } = thumbnailImage || {};

    // Refs
    const playerRef = useRef<ReactPlayer | null>(null);
    const progressRef = useRef<number>(progress || 0);

    // State
    const [isReady, setIsReady] = useState(false);

    // Handlers
    const handleReady = () => {
        setIsReady(true);
    };

    const handleTrackPause = () => {
        // TODO: Make request to api to save state
        // eslint-disable-next-line no-console
        console.log(`should save ${progressRef.current} with ${id}`);
    };

    const handleTrackProgress = (state: { played: number }) => {
        if (typeof progressRef.current !== 'undefined') {
            progressRef.current = state.played;
            // TODO: Make request to api to save state
        }
    };

    // Effects
    // Mount
    useEffect(() => {
        if (isReady && progress && playerRef.current) {
            playerRef.current.seekTo(progress, 'fraction');
        }
    }, [isReady, progress]);

    // Unmount
    useEffect(() => () => {
        // TODO: Make request to api to save state
        // eslint-disable-next-line no-console
        console.log(`should save ${progressRef.current} with ${id}`);
    }, [id]);

    return (
        <div
            className={twMerge(
                classNames(
                    'w-full aspect-[25/14] overflow-hidden shadow-2xl',
                    hasRoundedCorners && 'rounded-2xl',
                ),
                className,
            )}
        >
            <Suspense>
                <ReactPlayer
                    // eslint-disable-next-line tailwindcss/no-custom-classname
                    className="react-player"
                    config={{
                        file: {
                            attributes: {
                                controlsList: 'nodownload',
                            },
                        },
                    }}
                    controls
                    height="100%"
                    light={(!startWithControls && thumbnailImageSrc) && thumbnailImageSrc}
                    pip={false}
                    playIcon={(
                        <PlayCircleIcon />
                    )}
                    playing={!startWithControls && isAutoPlay}
                    ref={playerRef}
                    url={videoSrc}
                    width="100%"
                    onPause={handleTrackPause}
                    onProgress={handleTrackProgress}
                    onReady={handleReady}
                    {...onCompleted && {
                        onEnded: onCompleted,
                    }}
                />
            </Suspense>
        </div>
    );
};
