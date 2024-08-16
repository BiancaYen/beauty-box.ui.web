'use client';

import React, { FC } from 'react';

// Icons
import { PlaylistIcon } from '@/components/icons';

// Components
import { Toggle } from '@/components/global/toggle';

// Types
interface PlaylistControlsProps {
    count: number,
    isAutoplay: boolean,
    onChange: () => void,
}

export const PlaylistControls: FC<PlaylistControlsProps> = ({
    count,
    isAutoplay,
    onChange,
}) => (
    <div className="mx-5 mb-3 flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
            <PlaylistIcon
                fill="var(--color-default-black)"
                height="12"
                width="12"
            />
            <p className="text-xxs">{`${count} lessons`}</p>
        </div>

        <Toggle
            label="Autoplay"
            labelAlignment="left"
            value={isAutoplay}
            onChange={onChange}
        />
    </div>
);
