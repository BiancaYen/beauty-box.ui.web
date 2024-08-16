import React from 'react';

type BookmarkOutlinedIconProps = {
    className?: string,
    fill?: string,
    height?: string,
    width?: string,
};

/* eslint-disable max-len */
export const BookmarkOutlinedIcon: React.FC<BookmarkOutlinedIconProps> = ({
    className,
    fill = 'var(--color-default-white)',
    height = '12',
    width = '10',
}) => (
    <svg
        className={className}
        height={height}
        width={width}
        viewBox="0 0 14 13"
    >
        <path
            d="m10.876 1.104-.106 9.672-3.527-2.813-3.782 2.801-.169-9.646z"
            stroke={fill}
            strokeWidth="1.5"
            fill="none"
        />
    </svg>
);
