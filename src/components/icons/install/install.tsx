import React from 'react';

// Types
type InstallIconProps = {
    fill?: string,
    height?: string,
    width?: string,
};

/* eslint-disable max-len */
export const InstallIcon: React.FC<InstallIconProps> = ({
    fill = 'var(--color-default-white)',
    height = '1.75rem',
    width = '1.8125rem',
}) => (
    <svg
        height={height}
        width={width}
        viewBox="0 0 29 28"
    >
        <path
            d="M27.231 17.82A1.76 1.76 0 0 1 29 19.565v6.687A1.76 1.76 0 0 1 27.231 28H1.77A1.76 1.76 0 0 1 0 26.253v-6.687a1.76 1.76 0 0 1 1.769-1.747 1.76 1.76 0 0 1 1.768 1.747v4.97h21.926v-4.97a1.76 1.76 0 0 1 1.768-1.747zM14.546 0a1.76 1.76 0 0 1 1.768 1.747v11.024l2.226-2.199a1.764 1.764 0 0 1 2.501 0 1.713 1.713 0 0 1 0 2.47l-5.245 5.18a1.79 1.79 0 0 1-1.25.513 1.79 1.79 0 0 1-1.25-.512l-5.307-5.18a1.713 1.713 0 0 1 0-2.47 1.764 1.764 0 0 1 2.501 0l2.287 2.258V1.747A1.76 1.76 0 0 1 14.546 0z"
            fill={fill}
        />
    </svg>
);
