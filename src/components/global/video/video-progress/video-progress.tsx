import React, { FC } from 'react';

// Types
interface VideoProgressProps {
    progress: number,
    styles?: {
        [key: string]: string,
    },
}

export const VideoProgress: FC<VideoProgressProps> = ({
    progress,
    styles,
}) => (
    <div
        className="absolute bottom-[0px] left-1/2 h-[2px] w-full -translate-x-1/2 rounded-lg bg-default-white"
        style={styles}
    >
        <div
            className="h-[100%] bg-primary-default"
            style={{ width: `${progress}%` }}
        />
    </div>
);
