import React from 'react';
import { IconsProps } from '@/components/icons/icons';

/* eslint-disable max-len */
export const HeaderMenuIcon: React.FC<IconsProps> = ({
    className = '',
    fill = '#E60000',
    height = '10',
    width = '10',
}) => (
    <svg
        className={className}
        height={height}
        viewBox="0 0 10 10"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3.928 5.356c.395 0 .716.32.716.716v2.5c0 .789-.64 1.428-1.428 1.428H1.428C.64 10 0 9.36 0 8.572V6.784c0-.788.64-1.428 1.428-1.428h2.5zm4.644 0c.789 0 1.428.64 1.428 1.428v1.788A1.428 1.428 0 0 1 8.569 10H6.784c-.788 0-1.428-.64-1.428-1.428v-2.5c0-.395.32-.716.716-.716zM3.216 0c.788 0 1.428.64 1.428 1.428v2.497c0 .395-.32.716-.716.716h-2.5C.64 4.64 0 4 0 3.213V1.428C0 .64.64 0 1.428 0zm5.353 0A1.428 1.428 0 0 1 10 1.428v1.785C10 4 9.36 4.64 8.572 4.64h-2.5a.716.716 0 0 1-.716-.716V1.428C5.356.64 5.996 0 6.784 0H8.57z"
            fill="#251c5d"
            fillRule="nonzero"
        />
    </svg>
);
