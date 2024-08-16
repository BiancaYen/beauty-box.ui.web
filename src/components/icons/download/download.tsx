import React from 'react';

// Types
type DownloadIconProps = {
    fill?: string,
    height?: string,
    width?: string,
};

/* eslint-disable max-len */
export const DownloadIcon: React.FC<DownloadIconProps> = ({
    fill = '#FFFFFF',
    height = '0.625rem',
    width = '0.625rem',
}) => (
    <svg
        height={height}
        width={width}
        viewBox="0 0 10 10"
    >
        <path
            d="M1.568 6.939v1.516h6.864V6.939H10V10H0V6.939h1.568zM5.769 0v3.994L7.337 2.45l1.095 1.079L5 6.938l-3.462-3.41 1.125-1.079L4.23 3.994V0h1.538z"
            fill={fill}
        />
    </svg>
);
